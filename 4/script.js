const instruments = [
    "bd",
    "snare",
    "toml",
    "tomm",
    "tomh",
    "clap",
    "ride",
    "hh"
];

function createInstruments() {
    const stepColor = ["red", "orange", "yellow", "white"];

    let diff = 0;

    instruments.forEach(instrument => {
        let instrumentDiv = document.createElement("div");
        instrumentDiv.classList.add("instrument");
        $(".sequencer").append(instrumentDiv);

        let colorIndex = 0;
        for (let i = 0; i < 16; i++) {
            let div = document.createElement("div");
            div.classList.add(
                "step",
                "step-" + stepColor[colorIndex],
                "step-" + instrument
            );
            div.id = i + diff;
            instrumentDiv.append(div);

            if ((i + 1) % 4 === 0) {
                colorIndex++;
            }
        }
        console.log(instrumentDiv);

        diff += 16;
    });
}

createInstruments();

let sequencerMatrix = [];

instruments.forEach((instrument, index) => {
    sequencerMatrix[index] = new Array(16).fill(0);
});

const sampler = new Tone.Sampler({
    C1: "res/audio/BD.mp3",
    C2: "res/audio/SNARE.mp3",
    C3: "res/audio/TOML.mp3",
    C4: "res/audio/TOMM.mp3",
    C5: "res/audio/TOMH.mp3",
    C6: "res/audio/CLAP.mp3",
    C7: "res/audio/RIDE.mp3",
    C8: "res/audio/HH.mp3"
});

sampler.toMaster();

let index = 0;
let previousIndex;
let start = true;

var seq = new Tone.Sequence(
    (time, note) => {
        for (let i = 0; i < sequencerMatrix.length; i++) {
            if (sequencerMatrix[i][note] === 1) {
                sampler.triggerAttack("C" + (i + 1), "+0.3");
            }
        }

        Tone.Draw.schedule(() => {
            updateSequence();
        }, time);
    },
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    "16n"
);

Tone.Transport.start();

function updateSequence() {
    $(
        "#" +
            index +
            ", #" +
            (index + 16) +
            ", #" +
            (index + 32) +
            ", #" +
            (index + 48) +
            ", #" +
            (index + 64) +
            ", #" +
            (index + 80) +
            ", #" +
            (index + 96) +
            ", #" +
            (index + 112)
    ).addClass("step-active");
    $(
        "#" +
            previousIndex +
            ", #" +
            (previousIndex + 16) +
            ", #" +
            (previousIndex + 32) +
            ", #" +
            (previousIndex + 48) +
            ", #" +
            (previousIndex + 64) +
            ", #" +
            (previousIndex + 80) +
            ", #" +
            (previousIndex + 96) +
            ", #" +
            (previousIndex + 112)
    ).removeClass("step-active");

    previousIndex = index;
    index++;

    if (index > 15) {
        index = 0;
    }
}

instruments.forEach((instrument, index) => {
    $(`.step-${instrument}`).click(function() {
        const id = $(this).attr("id");
        $(`#${id}`).toggleClass("step-marked");
        sequencerMatrix[index][id - index * 16] =
            1 - sequencerMatrix[index][id - index * 16];
    });
});

let startButton = true;

$(".button-start-stop").click(() => {
    if (startButton) {
        seq.start();
    } else {
        seq.stop();
        $(
            "#" +
                previousIndex +
                ", #" +
                (previousIndex + 16) +
                ", #" +
                (previousIndex + 32) +
                ", #" +
                (previousIndex + 48) +
                ", #" +
                (previousIndex + 64) +
                ", #" +
                (previousIndex + 80) +
                ", #" +
                (previousIndex + 96) +
                ", #" +
                (previousIndex + 112)
        ).removeClass("step-active");
        Tone.Draw.cancel(0);
        index = 0;
        previousIndex = -1;
    }
    startButton = !startButton;
});
