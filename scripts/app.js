let modal = document.querySelector(".modal");
/**open button */
let buttonOpen = document.querySelector(".new");
buttonOpen.addEventListener("click", openModal)
function openModal() {
    modal.classList.toggle("hidden")
}

let buttonNew = document.getElementById("new");
buttonNew.addEventListener("click", newNote)

function newNote() {
/**no pude usar event.preventdefault() porque no use una arrow function, y no la use porque creo que podría usar la misma función en otro lado aunque no estoy segura */  
/**agregar el contendor principal */
    let wrapper = document.querySelector(".wrapper")
    let note = document.createElement("article");
/**crear titulo, dar contenido y agregar al subcontendor */
    let title = document.createElement("h3")
    let text = document.createElement("p")
/**validar entrada */
    let validarTitulo = validarEntrada(title);
    let validarTexto = validarEntrada(text);
    if(!validarTitulo){
        console.log("Titulo Vacío")
    } else{
        title.textContent = document.getElementById("titulo").value;
        note.appendChild(title);
    }
    if(!validarTexto){
        console.log("Texto vacio")
    } else{
        text.textContent = document.getElementById("text").value;
        text.classList.add("text");
        note.appendChild(text);
    }
    if (validarTitulo && validarTexto) {
        wrapper.appendChild(note);
        note.classList.add("notes");
    }

    modal.classList.add("hidden");
    /**resetear el valor de los input */
    document.getElementById("titulo").value = "";
    document.getElementById("text").value = "";
}
function validarEntrada(element){
    if (element.lenght >= 1){
        return true; 
    }else{
        return false;
    }
}
console.log(text.value)
/**close button */
let buttonClose = document.getElementById("close");
buttonClose.addEventListener("click", closen)

function closen(){
    modal.classList.add("hidden")
}
/**modo oscuro provicional  */
    let button = document.getElementById("activar");

button.addEventListener("click", modo)
function modo() {
    let inputs = document.querySelector(".entradas");
    let textarea = document.getElementById("text")
    let todo = document.getElementById("body");
    let modal = document.querySelector(".modal");
    modal.classList.toggle("oscuro");
    todo.classList.toggle("oscuro");
    inputs.classList.toggle("oscuro");
    textarea.classList.toggle("oscuro");
}