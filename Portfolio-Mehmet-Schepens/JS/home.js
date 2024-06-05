// Invoegen van een self executing function
(function () {
  function displayTime() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    document.getElementById('clock').innerHTML = hour + ':' + min + ':' + sec; //maniplaatie van elementen
  }
  // hier gebruik ik een callback function
  setInterval(displayTime, 1000)

  // Gebruiken van template literals en constante
  // hier gebruik ik een callback function
  document.addEventListener('DOMContentLoaded', function () { // Hier koppel ik een event aan een element
    const welcome = "Welcome";
    const zin = `${welcome} to my personal diary!`;
    //maniplaatie van elementen
    const welcomeZin = document.getElementById('template-literal');
    welcomeZin.innerHTML = zin;
  });
})();
//maniplaatie van elementen
// Hier selecteer ik een element
const notesContainer = document.getElementById("notes");
const addNoteButton = notesContainer.querySelector(".add_note");

// hieronder gebruik ik arrow-function
// hier gebruik ik consumer methods (for-each)
// hier gebruk ik array iteration methods
getNotes().forEach((note) => {
  //maniplaatie van elementen
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

// hieronder gebruik ik arrow-function
// Hier selecteer ik een element
// Hier koppel ik een event aan een element
// hier gebruik ik een callback function
addNoteButton.addEventListener("click", () => addNote());

// hieronder gebruik ik arrow-function
// Hier selecteer ik een element
// Hier koppel ik een event aan een element
// hier gebruik ik een callback function
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
//maniplaatie van elementen
// Hier selecteer ik een element
function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.dataset.id = id;
  element.value = content;
  element.placeholder = "type hier...";

  // Hier koppel ik een event aan een element
  element.addEventListener("change", () => {
    modifyNote(id, element.value);
  });
  return element;
}
//maniplaatie van elementen
function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };
  //maniplaatie van elementen
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
// maniplaatie van elementen
// Hier koppel ik een event aan een element
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('checkbox');
  const squareAnimation = document.querySelector('.squareAnimation');

  // gebruik van destructuring (target)
  // Hier koppel ik een event aan een element
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
