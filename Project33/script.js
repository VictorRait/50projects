const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));
console.log(notes);

const updateLS = function () {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
    console.log(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  });
};

const addNewNote = function (text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `  
  <div class="tools">
  <button class="edit"><i class="fas fa-edit"></i></button>
  <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea>`;

  document.body.appendChild(note);

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", function () {
    note.remove();
    localStorage.removeItem("notes");
    updateLS();
  });
  editBtn.addEventListener("click", function () {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);

    updateLS();
  });
};
if (notes) {
  notes.forEach((note) => addNewNote(note));
}
addBtn.addEventListener("click", () => {
  addNewNote();
});
