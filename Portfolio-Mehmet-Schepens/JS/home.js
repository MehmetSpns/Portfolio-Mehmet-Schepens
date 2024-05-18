
function displayTime(){
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  document.getElementById('clock').innerHTML = hour + ':' + min + ':' + sec;
}
setInterval(displayTime, 1000);
// Gebruiken van template literals en constante
document.addEventListener('DOMContentLoaded', function () {
  const welcome = "Welcome";
  const zin = `${welcome} to my personal diary!`;

  const welcomeZin = document.getElementById('template-literal');
  welcomeZin.innerHTML = zin;
});

const notesContainer = document.getElementById("notes");
const addNoteButton = notesContainer.querySelector(".add_note");
// hieronder gebruik ik een aantal keer de "arrow-function"
getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

notesContainer.addEventListener("dblclick", (event) => {
  if (event.target.classList.contains("note")) {
    const noteId = event.target.dataset.id;
    const confirmation = window.confirm("Ben je wel zeker dat je deze note wilt verwijderen?");
    if (confirmation) {
      removeNoteAndElement(noteId, event.target);
    }
  }
});
// Hier ga ik tewerk met localStorage en ook JSON
function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.dataset.id = id;
  element.value = content;
  element.placeholder = "type hier...";

  element.addEventListener("change", () => {
      modifyNote(id, element.value);
  });
  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
      id: Math.floor(Math.random() * 100000),
      content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function modifyNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.find((note) => note.id == id);

  if (targetNote) {
      targetNote.content = newContent;
      saveNotes(notes);
  }
}

function removeNoteAndElement(id, element) {
  let notes = getNotes();
  notes = notes.filter(note => note.id != id);
  saveNotes(notes);
  element.remove();
}


// Vanaf deze lijn gaat het tewerk met het unsplash API