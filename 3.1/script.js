// Button event listener
document.getElementById("execute").addEventListener("click", powInt);

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