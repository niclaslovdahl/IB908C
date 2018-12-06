/**
 * Shows HTML-element.
 */
$("#button-show").click(() => {
    $(".show-element").show();
});

/**
 * Hides HTML-element.
 */
$("#button-hide").click(() => {
    $(".show-element").hide();
});

/**
 * Toggles between showing and hiding HTML-element.
 */
$("#button-toggle").click(() => {
    $(".show-element").toggle();
});

/**
 * Shows HTML-element by fade in animation.
 */
$("#button-fadeIn").click(() => {
    $(".fade-element").fadeIn();
});

/**
 * Hides HTML-element by fade out animation.
 */
$("#button-fadeOut").click(() => {
    $(".fade-element").fadeOut();
});

/**
 * Toggles between showing and hiding HTML-element by fade in animation.
 */
$("#button-fadeToggle").click(() => {
    $(".fade-element").fadeToggle();
});

/**
 * Shows HTML-element with random opacity using fast fade animation.
 */
$("#button-fadeTo").click(() => {
    $(".fade-element").fadeTo("fast", Math.random());
});

/**
 * Animates HTML-element increasing size to 200% over 5 seconds then setting
 * HTML-element text in callback function.
 */
$("#button-animate").click(() => {
    $(".animate-element").animate({
        fontSize: "200%"
    }, 5000, "linear", () => {
        $(".callback-element").text("Animation färdig");
    });
});