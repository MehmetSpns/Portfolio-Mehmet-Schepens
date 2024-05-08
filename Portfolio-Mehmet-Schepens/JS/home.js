'use strict'

function displayTime() {
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
addNote = () => {
    var noteContainer = document.getElementById("note-container").value;
    if (noteContainer.trim() !== "") {
        var notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(noteContainer);
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
        document.getElementById("note-container").value = "";
    }
    else {
        alert("ERROR: uw notitie is leeg, vul eerst iets in :/")
    }
}
showNotes = () => {

}




