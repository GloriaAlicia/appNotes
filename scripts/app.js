/**HACER LISTAS PARA TACHAR, CRONOMETRO pomodoro, rutina */
let modal = document.querySelector(".modal");
/**open button */
let buttonOpen = document.querySelector(".new");
buttonOpen.addEventListener("click", openModal);
function openModal() {
    modal.classList.toggle("hidden");
}
let buttonNew = document.getElementById("new");
buttonNew.addEventListener("click", verificarYCrear);

let errorTitulo = document.getElementById("errorTitulo");
let errorTexto = document.getElementById("errorTexto");
let form = document.querySelector(".form");

function validarEntrada(inputs){
    if (inputs.length == 0){
       return  true;
    }
   return false
}
function verificarYCrear(evento) {
    evento.preventDefault();
    let entradaTitulo = document.getElementById("titulo").value;
    let entradaTexto = document.getElementById("text").value;
    let nuevaNota = obtenerDatos(form);

    if(!validarEntrada(entradaTitulo)) {
        errorTitulo.classList.add("hidden");
    }
    if (!validarEntrada(entradaTexto)) {
        errorTexto.classList.add("hidden");
    }
    if(!validarEntrada(entradaTitulo) && !validarEntrada(entradaTexto)){
        agregarNota(nuevaNota);
        saveNote(nuevaNota);
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


function obtenerDatos(form){
    /**form.name.value <- esto es del atributo name*/
    let nuevaNota = {
        id:generarId(),
        titulo: form.titulo.value,
        nota: form.textoNota.value
    }
    return nuevaNota;
}

/*********funciones genericas para toda la página************* */

function construirNota(nuevaNota){
    let note = document.createElement("article");
    note.classList.add("notes");
    let options = document.createElement("div");
    options.classList.add("options");

    note.appendChild(crearElementos("h3", nuevaNota.titulo,"title"));
    note.appendChild(crearElementos("p",nuevaNota.nota,"text"));
    note.appendChild(options);

    options.appendChild(eliminar());
    options.appendChild(favorite());
    return note;
}

function agregarNota(nuevaNota){
    let wrapper = document.querySelector(".wrapper");
    let note = construirNota(nuevaNota);
    note.setAttribute("number", nuevaNota.id);
    wrapper.appendChild(note);
    return note;
}
function crearElementos(element,dato,clase) {
    let creando = document.createElement(element);
    creando.classList.add(clase);
    creando.textContent = dato;
    return creando;
}
/**close button */
function closen(){
    modal.classList.add("hidden");
    document.querySelector(".form").reset();
    errorTitulo.classList.add("hidden");
    errorTexto.classList.add("hidden");
}