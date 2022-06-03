/**practica de delegación de eventos

utilizar la misma ventana para editar todas las notas/----tomar el contenido de la nota (atributo number) -> contenido
boton editar(reemplazar el contenido html/localStorage) / cancelar-ocultar ventana
probar validaciones
!!! cerrar cierra todas las ventanas con la clase modal
*/

let contenedorNotas = document.querySelector(".wrapper")
contenedorNotas.addEventListener("click", (event)=>{
    if(event.target.matches(".editar")){
        event.preventDefault();
        document.getElementById("modalEditor").classList.remove("hidden");
            //------------obteniendo en localStorage---------
        let notaEditando = event.target.parentNode.parentNode.getAttribute('number');

        //-------------obtener textos a editar para mostrar en ventana-----------
        let $textoTitulo = event.target.parentNode.parentNode.childNodes[0];
        let $textoNota = event.target.parentNode.parentNode.childNodes[1];
        document.getElementById("editorTitulo").value = $textoTitulo.textContent;
        document.getElementById("editorText").value = $textoNota.textContent;

        //guardando...
        document.getElementById("editado").onclick = (event)=>{
            event.preventDefault();
            $textoTitulo.textContent = document.getElementById("editorTitulo").value;
            $textoNota.textContent = document.getElementById("editorText").value;
            editNotesLocalStorage(notaEditando);
            document.getElementById("modalEditor").classList.add("hidden");
        }
    }
})
function editNotesLocalStorage(notaEditando){
    let allNotes = JSON.parse(localStorage.getItem("allNotes"));
    let buscando = allNotes.filter(element => element.id == notaEditando);

    //editar y reguardar
    buscando[0].titulo = document.getElementById("editorTitulo").value
    buscando[0].nota = document.getElementById("editorText").value;
    let convertJson = JSON.stringify(allNotes);
    localStorage.setItem("allNotes",convertJson);
}

document.getElementById("cerrarEditor").addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("modalEditor").classList.add("hidden");
})