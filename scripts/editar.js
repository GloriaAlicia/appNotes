/**practica de delegación de eventos*/

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
            if(document.getElementById("editorTitulo").value === "" || document.getElementById("editorText").value === ""){
                //mostrar alerta "algo ésta vacío"
                document.getElementById("alertaEditor").classList.remove("hidden");
            }else{
                $textoTitulo.textContent = document.getElementById("editorTitulo").value;
                $textoNota.textContent = document.getElementById("editorText").value;
                editNotesLocalStorage(notaEditando);
                document.getElementById("modalEditor").classList.add("hidden");
                document.getElementById("alertaEditor").classList.add("hidden");
            }
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
    document.getElementById("alertaEditor").classList.add("hidden");
})