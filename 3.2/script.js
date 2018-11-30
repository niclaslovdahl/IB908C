/**
 * Gets and sets values and attributes of link-tag. Also updates paragraph
 * and removes button.
 */
$("#link-button").click(() => {
    $(".link-google").removeClass("link-google").addClass("link-youtube");
    $(".link-youtube").text("Nu leder länken till YouTube");
    $(".link-youtube").attr("href", "https://youtube.com");
    $(".info-text").text("Knappen du tryckte på har id:" + $("#link-button").attr("id"));
    $("#link-button").remove();
});

/**
 * Updates paragraph with the current width of the browser.
 */
$(window).resize(() => {
    $(".window-text").text("Webbläsarens bredd är " + $(window).width() + " pixlar.");
});

/**
 * Outputs text to paragraph.
 */
$(".input-one").focus(() => {
    $(".focus-text").text("Du markerade översta fältet.");
});

/**
 * Outputs text to paragraph.
 */
$(".input-two").focus(() => {
    $(".focus-text").text("Du markerade nedersta fältet.");
});

/**
 * Outputs text to paragraph including the key that was pressed.
 */
$(document).keydown((e) => {
    $(".keypress-text").text("Du tryckte på " + e.key);
});

// Boolean operator declared and initiated
let hover = false;

/**
 * Toogles between classes.
 */
$("#hover-div").hover(() => {
    if (hover) {
        $("#hover-div").removeClass("hover-div-color").addClass("hover-div");
    } else {
        $("#hover-div").removeClass("hover-div").addClass("hover-div-color");
    }
    hover = !hover;
});

/**
 * Gets x and y pointer cordinates from event and ouputs it to paragraph.
 */
$(window).mousemove((e) => {
    $(".mouse-cords").text("Koordinater för din pekare är: x:" + e.pageX + " y:" + e.pageY);
});

/**
 * Returns false.
 */
$("#checkbox").click(() => {
    return false;
});

/**
 * Sets all on() events to off().
 */
$("#button-destroy").click(() => {
    $("*").off();
});