const textArea= document.querySelector("#noteInput");
const saveButton =document.querySelector("#saveNotes");
const container =document.querySelector("#notesContainer");

const notes=["walk the dog",'remember to study'];
localStorage.setItem("notes",JSON.stringify(notes));
const loadNotes=()=>{
    const notes=JSON.parse(localStorage.getItem("notes"));
    for(let note of notes){
        const noteElement=document.createElement("li");
        noteElement.textContent=note;
        container.appendChild(noteElement);
    }
}

loadNotes();
saveButton.addEventListener('click',()=>{
    const noteContent=textArea.value.trim();
    const noteElement=document.createElement("li");
    noteElement.textContent=noteContent;
    container.appendChild(noteElement);
})