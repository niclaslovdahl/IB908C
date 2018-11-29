// Event listeners
document.getElementById("execute").addEventListener("click", powInt);
document.getElementById("sort").addEventListener("click", sortNames);

// Loop running showDate every second
window.setInterval(loadDate, 1000);

/** 
 * Gets the values to calculate from the DOM and evaluates if they are
 * integers. If they are integers they are used to calculate pow and result
 * are outputted to the page. If not, an error message is outputted to the page.
 */
function powInt() {
    const regex = new RegExp('^[0-9]+$');
    let valueOne = document.getElementById("valueOne").value;
    let valueTwo = document.getElementById("valueTwo").value;
    if (regex.test(valueOne) && regex.test(valueTwo)) {
        let result = Math.pow(parseInt(valueOne), parseInt(valueTwo));
        document.getElementById("output").innerHTML = result.toString();
    } else {
        document.getElementById("output").innerHTML = "Fel inmatningstyp";
    }
}

// Declares and initiates name array and DOM-element
let names = ["Niclas", "Johan", "Sofie", "Lars", "Hampus"];
let namesElement = document.getElementById("names");

/**
 * Clears and loads names array to the DOM.
 */
function loadNames() {
    namesElement.innerHTML = "";
    names.forEach((name, index) => {
        namesElement.innerHTML += (index + 1) + ". " + name + "<br>";
    });
}

/**
 * Sorts the name array in alphabetical order and calls loadnames().
 */
function sortNames() {
    names.sort();
    loadNames();
}

// Declares and initiates DOM-element
let dateElement = document.getElementById("date");

/**
 * Updates DOM-element with current date and time.
 */
function loadDate() {
    dateElement.innerHTML = Date();
}

// Loads content to the DOM
loadDate();
loadNames();