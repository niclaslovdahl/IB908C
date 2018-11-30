/**
 * This function gets and sets values and attributes of a link-tag. It also
 * updates a paragraph and removes a button.
 */
$("#link-button").click(() => {
    $(".link-google").removeClass("link-google").addClass("link-youtube");
    $(".link-youtube").text("Nu leder länken till YouTube");
    $(".link-youtube").attr("href", "https://youtube.com");
    $(".info-text").text("Knappen du tryckte på har id:" + $("#link-button").attr("id"));
    $("#link-button").remove();
});

/**
 * This function updates a paragraph with the current width of the browser.
 */
$(window).resize(() => {
    $(".window-text").text("Webbläsarens bredd är " + $(window).width() + " pixlar.");
});