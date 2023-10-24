/*
Minut to second = minut * 60
Hour to seconds = hour * 3600
const seconds = minutes * 60;
    return seconds;
 */

const btn1 = document.querySelector('#btn1')
function minuteToSeconds () {
    const minutes = document.querySelector('#input');
    const seconds = document.querySelector('#output');
    seconds.innerText = "Total Seconds: " + minutes.value * 60;
}
btn1.addEventListener('click',minuteToSeconds);

const btn3 = document.querySelector('#btn3');
function dropDownCalculator () {
    const selected = document.querySelector('#select-calculator');
    const selectedOptions = selected.options[selected.selectedIndex].value;
    const input = parseFloat(document.querySelector('#input-calculator').value);

    let result;
    if (selectedOptions === "Minutes to seconds") {
        result = input  * 60;
    } else if (selectedOptions === "Hours to seconds") {
        result = input * 3600;
    }

    document.querySelector('#dropdown-output').textContent = `${result} seconds`;
}

btn3.addEventListener('click',dropDownCalculator);