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

