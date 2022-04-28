function eliminar() {
    let botonEliminar = (crearElementos("button","eliminar","stop"));
    botonEliminar.addEventListener("click", (event)=>{
        event.target.parentNode.remove();
    })
    return botonEliminar;
}