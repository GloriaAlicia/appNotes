/**
    JSON.stringify (para covertir en texto | guardar en localStorage)
    JSON.parse (para convertir en el tipo original | para traer elemento de localStorge)


    getItem("keyName")
    setItem("name",value) <-- guardar una nueva llave con valor
 */
function obtenerDatos(form){
   /**form.name.value <- esto es del atributo name*/
   let nuevaNota = {
      id:generarId(),
      titulo: form.titulo.value,
      nota: form.textoNota.value
   }
   return nuevaNota;
}
/***********************************re asignar */
function saveNote(nuevaNota){
      /**traer el contenido anterior de localStorage, o iniciar con array */
      let all = JSON.parse(localStorage.getItem("allNotes")) || [];
      all.push(nuevaNota);
      /**convertir a JSON todas las notas*/
      let convert = JSON.stringify(all);
      //guardar el arrayconvertido en localStorage
      localStorage.setItem("allNotes",convert);
}

/****traer de localStorage **element es cada nota individual*/
document.addEventListener("DOMContentLoaded",function(event){
   let contenidoPrecreado = JSON.parse(localStorage.getItem("allNotes"));
   contenidoPrecreado.forEach(element => {
     agregarNota(element)
   });
})
/*************************************** */
function generarId(){
   let ultimoId = localStorage.getItem("ultimoId") || "-1";
   let nuevoId = JSON.parse(ultimoId) + 1; // JSON.parse = parseInt
   localStorage.setItem("ultimoId",JSON.stringify(nuevoId)); 
   // JSON.stringify = .toString
   return nuevoId;
}