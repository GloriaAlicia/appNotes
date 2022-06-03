/**
    JSON.stringify (para covertir en texto | guardar en localStorage)
    JSON.parse (para convertir en el tipo original | para traer elemento de localStorge)
    getItem("keyName")
    setItem("name",value) <-- guardar una nueva llave con valor
 */
function saveNoteLocalStorage(nuevaNota){
      /**traer el contenido anterior de localStorage, o iniciar con array vacío*/
      let all = JSON.parse(localStorage.getItem("allNotes")) || [];
      all.push(nuevaNota);
      let convert = JSON.stringify(all);
      //guardar el arrayconvertido en localStorage reemplazandose a sí misma
      localStorage.setItem("allNotes",convert);
}

/****traer de localStorage **element es cada nota individual*/
document.addEventListener("DOMContentLoaded",function(event){
   let contenidoPrecreado = JSON.parse(localStorage.getItem("allNotes"));
   if(contenidoPrecreado != null){
      contenidoPrecreado.forEach(element => {
         agregarNota(element);
       });
   }
})
function generarId(){
   let ultimoId = localStorage.getItem("ultimoId") || "-1";
   let nuevoId = JSON.parse(ultimoId) + 1; // JSON.parse = parseInt
   localStorage.setItem("ultimoId",JSON.stringify(nuevoId));  // JSON.stringify = .toString
   return nuevoId;
}