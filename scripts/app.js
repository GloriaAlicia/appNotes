let modal = document.querySelector(".modal");
/**open button */
let buttonOpen = document.querySelector(".new");
buttonOpen.addEventListener("click", openModal)
function openModal() {
    modal.classList.toggle("hidden")
}

let buttonNew = document.getElementById("new");
buttonNew.addEventListener("click", verificarYCrear);

let fields = document.querySelector(".field")
let errorTitulo = document.getElementById("errorTitulo");
let errorTexto = document.getElementById("errorTexto");

function validarEntrada(inputs){
    if (inputs.length == 0){
       return  true;
    }
   return false
}

function verificarYCrear() {
    let entradaTitulo = document.getElementById("titulo").value;
    let entradaTexto = document.getElementById("text").value;

    let note = document.createElement("article");
    /**no pude usar event.preventdefault() porque no use una arrow function, y no la use porque creo que podría usar la misma función en otro lado aunque no estoy segura */ 
    if(!validarEntrada(entradaTitulo)) {
        errorTitulo.classList.add("hidden");
        note.appendChild(crearElementos("h3", entradaTitulo));
    }
    if (!validarEntrada(entradaTexto)) {
        errorTexto.classList.add("hidden");
        note.appendChild(crearElementos("p",entradaTexto,"text"));
    }
    if(!validarEntrada(entradaTitulo) && !validarEntrada(entradaTexto)){
        let wrapper = document.querySelector(".wrapper");
        note.classList.add("notes");
        wrapper.appendChild(note);
        closen();
    }

/**si la entrada esta vacía muestra error */
    if(validarEntrada(entradaTitulo)){
        errorTitulo.classList.remove("hidden");
    }
    if(validarEntrada(entradaTexto)){
        errorTexto.classList.remove("hidden");
    }
}

function crearElementos(element,dato,clase) {
    let creando = document.createElement(element);
    creando.classList.add(clase);
    creando.textContent = dato;
    return creando;
}

/**close button */
let buttonClose = document.getElementById("close");
buttonClose.addEventListener("click", closen);
function closen(){
    modal.classList.add("hidden");
    document.getElementById("titulo").value = "";
    document.getElementById("text").value = "";
    errorTitulo.classList.add("hidden");
    errorTexto.classList.add("hidden");
}
/**modo oscuro provicional  */
    let button = document.getElementById("activar");

button.addEventListener("click", modo)
function modo() {
    let titulo = document.getElementById("titulo");
    let textarea = document.getElementById("text");
    let todo = document.getElementById("body");
    let modal = document.querySelector(".modal");
    modal.classList.toggle("oscuro");
    todo.classList.toggle("oscuro");
    titulo.classList.toggle("oscuro");
    textarea.classList.toggle("oscuro");
}