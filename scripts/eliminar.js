function eliminar() {
    let botonEliminar = (crearElementos("button","","stop"));

    botonEliminar.addEventListener("click", (event)=>{
        let notaActual = event.target.parentNode.parentNode;
        let idAqui = notaActual.getAttribute("number");
        notaActual.classList.add("fadeOut");

        setTimeout(()=>{
            notaActual.remove();
            deleteId(idAqui);
        },380)
    })
    return botonEliminar;
}
/**borrar localStorage */
function deleteId(idAqui){
    let all = JSON.parse(localStorage.getItem("allNotes"));
    /**buscar el indice (id) | con cada vuelta compara el idActual*/
    let indexOfAll = all.findIndex(element => element.id == idAqui);
    //splice elimina elementos de un array, (primerElemento numeroDeElementosParaBorrar)
    all.splice(indexOfAll, 1);
    let convertJson = JSON.stringify(all);
    localStorage.setItem("allNotes",convertJson);
}