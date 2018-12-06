// Image object declared and initiated
let dogImage = new Image();
dogImage.src = "https://upload.wikimedia.org/wikipedia/commons/1/16/Alaskanmalamute0b.jpg";

/**
 * Img src change using preloaded image.
 */
$("#button-attr").click(() => {
    $(".img-attr").attr("src", dogImage.src);
});

/**
 * Img src change using preloaded image.
 */
$(".img-rollover").mouseover(() => {
    $(".img-rollover").attr("src", dogImage.src);
});

/**
 * Draws straight lines on canvas.
 */
let straight = () => {
    let canvas = document.getElementById("drawing-canvas-straight");
    let context = canvas.getContext("2d");

    context.moveTo(10, 25);
    context.lineTo(10, 125);
    context.moveTo(30, 25);
    context.lineTo(30, 125);
    context.moveTo(40, 50);
    context.lineTo(140, 50);
    context.stroke();
}

/**
 * Draws bezier curve and triangle filling them with color.
 */
let forms = () => {
    let canvas = document.getElementById("drawing-canvas-forms");
    let context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(10, 50);
    context.bezierCurveTo(10, 10, 75, 75, 100, 10);
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    context.beginPath();

    let gradient = context.createLinearGradient(10, 0, 100, 0);
    gradient.addColorStop(0, "magenta");
    gradient.addColorStop(1, "yellow");

    context.moveTo(50, 50);
    context.lineTo(25, 75);
    context.lineTo(75, 75);
    context.closePath();

    context.fillStyle = gradient;
    context.fill();
    context.stroke();
}

/**
 * Draws text with shadow and opacity settings.
 */
let text = () => {
    let canvas = document.getElementById("drawing-canvas-text");
    let context = canvas.getContext("2d");
    context.shadowColor = "#bbbbbb";
    context.globalAlpha = 0.6;
    context.shadowBlur = 3;
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 15;
    context.font = "18px Arial";
    context.fillText("Hello World", 20, 75);
}

/**
 * Draws image and saving using toDataURL(). (Can not be used locally)
 */
let image = () => {
    let canvas = document.getElementById("drawing-canvas-image");
    let context = canvas.getContext("2d");
    context.drawImage(dogImage, 0, 0, 130, 100);
    let img = canvas.toDataURL();
}

// Call all drawing functions
straight();
forms();
text();
image();