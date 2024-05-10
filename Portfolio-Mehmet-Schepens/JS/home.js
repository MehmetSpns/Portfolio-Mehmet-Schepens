document.addEventListener('DOMContentLoaded', function () {
  const welcome = "Welcome";
  const zin = `${welcome} to my personal diary!`;

  const welcomeZin = document.getElementById('template-literal');
  welcomeZin.innerHTML = zin;
});

const notesContainer = document.getElementById("notes");
const addNoteButton = notesContainer.querySelector(".add_note");

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
