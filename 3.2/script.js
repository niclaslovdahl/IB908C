/**
 * This function gets and sets values and attributes of a link-tag. It also
 * updates a paragraph and removes a button.
 */
$("#linkButton").click(() => {
    $(".link-google").removeClass("link-google").addClass("link-youtube");
    $(".link-youtube").text("Nu leder länken till YouTube");
    $(".link-youtube").attr("href", "https://youtube.com");
    $(".infoText").text("Knappen du tryckte på har id:" + $("#linkButton").attr("id"));
    $("#linkButton").remove();
});

/**
 * This function updates a paragraph with the current width of the browser.
 */
$(window).resize(() => {
    $(".windowText").text("Webbläsarens bredd är " + $(window).width() + " pixlar.");
});