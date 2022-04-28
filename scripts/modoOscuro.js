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