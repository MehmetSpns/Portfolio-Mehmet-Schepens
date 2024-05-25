
// Invoegen van een self executing function
(function() {
  function displayTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    document.getElementById('clock').innerHTML = hour + ':' + min + ':' + sec;
  }
  setInterval(displayTime, 1000)
  // Gebruiken van template literals en constante
  document.addEventListener('DOMContentLoaded', function () {
    const welcome = "Welcome";
    const zin = `${welcome} to my personal diary!`;

    const welcomeZin = document.getElementById('template-literal');
    welcomeZin.innerHTML = zin;
  });
})();

const notesContainer = document.getElementById("notes");
const addNoteButton = notesContainer.querySelector(".add_note");
// hieronder gebruik ik een aantal keer de "arrow-function"
// hier gebruik ik consumer methods (for-each)
// hier gebruk ik array iteration methods
getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());
// hieronder gebruik ik een aantal keer de "arrow-function"
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
// invoegen van een animatie bij het aanvinken van de checkbox (anders werkt het animatie niet buiten dezelfde div)
document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  const squareAnimation = document.querySelector('.squareAnimation');
// gebruik van destructuring (target)
  checkbox.addEventListener('change', ({ target }) => {
    const checkbox = target;
    if (checkbox.checked) {
      squareAnimation.classList.add('animate');
    } else {
      squareAnimation.classList.remove('animate');
    }
  });
});
// Spread & Rest operator-----------------------------------------------------------------------------------------------------------------------------------------------------------------
const cijfers = [1, 2, 3, 4, 5];

// Hier gebruik ik de spread operator
const spread = [...cijfers];

// hier gebruik ik de rest operator
const sum = (...args) => {
  return args.reduce((total, current) => total + current, 0);
};

console.log(spread);
console.log(sum(1, 2, 3, 4, 5));
