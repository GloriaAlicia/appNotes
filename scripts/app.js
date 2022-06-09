/**HACER LISTAS PARA TACHAR drag & drop, CRONOMETRO pomodoro----rutina----- */
document.querySelector(".openModal").addEventListener("click", ()=>{
    let modal = document.getElementById("crearNota");
    modal.classList.remove("hidden");
})

/*********eventos para agregar palabra********** */
document.getElementById("new").addEventListener("click", (event)=>{
    verificarYCrear(event);
})
document.getElementById("closeModal").addEventListener("click",(event)=>{
    event.preventDefault();
    closen();
})

let errorTitulo = document.getElementById("errorTitulo");
let errorTexto = document.getElementById("errorTexto");

function validarEntrada(inputs){
    if (inputs.length == 0){
       return  true;
    }
   return false
}
function verificarYCrear(event) {
    event.preventDefault();
    let form = document.querySelector("form");
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
        saveNoteLocalStorage(nuevaNota);
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
        favorite: "false",
        titulo: form.titulo.value,
        nota: form.textoNota.value
    }
    return nuevaNota;
}

/*********contruir notas en html************* */

function construirNota(nuevaNota){
    let note = document.createElement("article");
    note.classList.add("notes");
    let options = document.createElement("div");
    options.classList.add("options");

    note.appendChild(crearElementos("h3", nuevaNota.titulo,"title"));
    note.appendChild(crearElementos("p",nuevaNota.nota,"text"));
    note.appendChild(options);

    options.appendChild(eliminar());
    options.appendChild(favorite(nuevaNota));
    options.appendChild(labelHeart(nuevaNota));
    options.appendChild(crearElementos("p", "editar","editar"));
    return note;
}

function agregarNota(nuevaNota){
    let wrapper = document.querySelector(".wrapper");
    let note = construirNota(nuevaNota);
    note.setAttribute("number", nuevaNota.id);

    if(nuevaNota.favorite == true){
        note.setAttribute("favorite", "true");
        gradientMash(note);
        favorite(nuevaNota).checked = true;
     } else {
        note.setAttribute("favorite", "false");
     }

    wrapper.appendChild(note);
    return note;
}
function crearElementos(element,dato,clase) {
    let creando = document.createElement(element);
    creando.classList.add(clase);
    creando.textContent = dato;
    return creando;
}
function closen(){
    document.getElementById("crearNota").classList.add("hidden");
    document.querySelector(".form").reset();
    errorTitulo.classList.add("hidden");
    errorTexto.classList.add("hidden");
}