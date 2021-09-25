let addNote = document.getElementById("add");
let noteGrid = document.querySelector(".added-notes");
let nottingInput = document.getElementById("notting");
let frame = document.getElementById("outer-frame");
let saveBtn = document.querySelector(".save");
let closeBtn = document.querySelector(".close");
let bgColors = [
  "#93B5C6",
  "#C9CCD5",
  "#FE346E",
  "#A2CDCD",
  "#E4D8DC",
  "#F9DFDC",
];
let count = 0;

/*Function to create new sticky note */
const createNotes = () => {
  let inputValue = nottingInput.value;
  let newCell = document.createElement("div");
  let newNote = document.createElement("div");
  let structure = document.createElement("pre");
  let removeIcon = document.createElement("span");

  newNote.setAttribute("class", "note");
  structure.textContent = inputValue;

  removeIcon.setAttribute("class", "material-icons");
  removeIcon.innerHTML = "delete";

  newNote.appendChild(structure);
  newNote.appendChild(removeIcon);
  newCell.appendChild(newNote);
  noteGrid.appendChild(newCell);
  bgColor(newNote);
  removeIcon.onclick = (e) => {
    deleteNote(e);
  };
  nottingInput.value = "";
};

const closeDialogue = () => {
  frame.style.display = "none";
}; /*closing creation frame function */

const openDialogue = () => {
  frame.style.display = "block";
  nottingInput.value = "";
}; /*opening creation frame function */

const deleteNote = (e) => {
  e.target.parentNode.parentNode.remove();
}; /*deleting sticky note function */

const bgColor = (item) => {
  if (count > bgColors.length - 1) count = 0;
  item.style.backgroundColor = bgColors[count++];
}; /* random background for sticky notes function */

/*clicking buttons events to  open creation frame, close creation 
frame and adding new sticky note respectively  */
addNote.addEventListener("click", openDialogue);
closeBtn.addEventListener("click", closeDialogue);
saveBtn.addEventListener("click", createNotes);
