$("#linkButton").click(() => {
    $(".link-google").removeClass("link-google").addClass("link-youtube");
    $(".link-youtube").text("Nu leder länken till YouTube");
    $(".link-youtube").attr("href", "https://youtube.com");
    $(".infoText").text("Knappen du tryckte på har id:" + $("#linkButton").attr("id"));
    $("#linkButton").remove();
});