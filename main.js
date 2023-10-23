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
    seconds.innerText = minutes.value * 60;
}
btn1.addEventListener('click',minuteToSeconds);

