'use strict'

function displayTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    document.getElementById('clock').innerHTML = hour + ':' + min + ':' + sec;
}
setInterval(displayTime, 1000);

document.addEventListener('DOMContentLoaded', function () {
    const welcome = "Welcome";
    const zin = `${welcome} to my personal diary!`;

    const welcomeZin = document.getElementById('template-literal');
    welcomeZin.innerHTML = zin;
});
