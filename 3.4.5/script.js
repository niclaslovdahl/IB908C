// Focuses on text field
$("#name").focus();

// Hides section of form 
$(".billing").hide();

// Checks radio button
$("#card").prop("checked", true);

/**
 * Showing and hiding element on click 
 */
$("#checkbox-billing").click(() => {
    $(".billing").toggle();
});

/**
 * Validates the form according rules applied and runs function on success.
 */
$(".pretty-form").validate({
    submitHandler: () => {
        alert("Formulär skickat");
    }
});