/**
 * Runs javascript function alert.
 */
$("#button-alert").click(() => {
    alert("Alert");
});

/**
 * Runs javascript function confirm.
 */
$("#button-confirm").click(() => {
    confirm("Confirm");
});

/**
 * Runs javascript function prompt.
 */
$("#button-prompt").click(() => {
    prompt("Prompt");
});

// Window variable declared
let popupWindow;

/**
 * Runs javascript function open.
 */
$("#button-open").click(() => {
    popupWindow = window.open("", "popupWindow", "width=400, height=400");
});

/**
 * Runs javascript function close.
 */
$("#button-close").click(() => {
    popupWindow.close();
});

// Window object declared
let loopAlert;

/**
 * Starts loop using setInterval() with timer set to 5 seconds.
 */
$("#button-setInterval").click(() => {
    loopAlert = setInterval(() => {
        alert("loop");
    }, 5000);
});

/**
 * Stops loop using clearInterval().
 */
$("#button-clearInterval").click(() => {
    clearInterval(loopAlert);
});

// Window object declared
let timeoutAlert;

/**
 * Starts countdown using setTimeout() with timer set to 5 seconds.
 */
$("#button-setTimeout").click(() => {
    timeoutAlert = setTimeout(() => {
        alert("timeout");
    }, 5000);
});

/**
 * Stops countdown using clearTimeout().
 */
$("#button-clearTimeout").click(() => {
    clearTimeout(timeoutAlert);
});