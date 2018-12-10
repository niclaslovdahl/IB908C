function createInstruments() {
    const instruments = ["bd", "hh"];
    let diff = 0;

    instruments.forEach(instrument => {
        let instrumentDiv = document.createElement("div");
        instrumentDiv.classList.add("instrument");
        $(".sequencer").append(instrumentDiv);

        for (let i = 0; i < 16; i++) {
            let div = document.createElement("div");
            div.classList.add("step", "step-" + instrument);
            div.id = i + diff;
            instrumentDiv.append(div);
        }
        diff += 16;
    });
}

createInstruments();

let sequencerMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var sampler = new Tone.Sampler({
    C3: "res/audio/BD.mp3",
    C4: "res/audio/HH.mp3 "
});

sampler.toMaster();

let index = 0;
let previousIndex;
let start = true;

var seq = new Tone.Sequence(
    (time, note) => {
        for (let i = 0; i < sequencerMatrix.length; i++) {
            if (sequencerMatrix[i][note] === 1) {
                console.log("BD");
                switch (i) {
                    case 0:
                        sampler.triggerAttack("C3", "+0.1");
                        break;
                    case 1:
                        sampler.triggerAttack("C4", "+0.1");
                        break;
                    default:
                        break;
                }
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
    $("#" + index + ", #" + (index + 16)).addClass("step-active");
    $("#" + previousIndex + ", #" + (previousIndex + 16)).removeClass(
        "step-active"
    );

    previousIndex = index;
    index++;

    if (index > 15) {
        index = 0;
    }
}

$(".step-bd").click(function() {
    const id = $(this).attr("id");
    $("#" + id).toggleClass("step-marked");
    sequencerMatrix[0][id] = 1 - sequencerMatrix[0][id];
    console.log(sequencerMatrix[0]);
});

$(".step-hh").click(function() {
    const id = $(this).attr("id");
    $("#" + id).toggleClass("step-marked");
    sequencerMatrix[1][id - 16] = 1 - sequencerMatrix[1][id - 16];
    console.log(sequencerMatrix[1]);
});

$("#button-start").click(() => {
    seq.start();
});

$("#button-stop").click(() => {
    seq.stop();
    $("#" + previousIndex + ", #" + (previousIndex + 16)).removeClass(
        "step-active"
    );
    Tone.Draw.cancel(0);
    index = 0;
    previousIndex = -1;
});
