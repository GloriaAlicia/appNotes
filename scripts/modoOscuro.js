let button = document.getElementById("activar");
button.addEventListener("click", modo);
/************************* */
let titulo = document.getElementById("titulo");
let textarea = document.getElementById("text");
let todo = document.querySelector("body");
modal = document.querySelector(".modal");


/**
 * if (button.checked == "false") {
    modo();
} else {
  //  button.checked;
    modal.classList.remove("oscuro");
    todo.classList.remove("oscuro");
    titulo.classList.remove("oscuro");
    textarea.classList.remove("oscuro");
}
 */



function modo() {
console.log(button.checked)

    saveDarkMode()
    modal.classList.toggle("oscuro");
    todo.classList.toggle("oscuro");
    titulo.classList.toggle("oscuro");
    textarea.classList.toggle("oscuro");
}
/*****guardar en localStorage ********************/
function saveDarkMode(){
    if (button.checked){
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }
}


document.addEventListener("DOMContentLoaded",function(event){
    let saved = localStorage.getItem("darkMode");
    if (saved == "false") {
        modo();
    } 
    if(saved == "true") {
        button.checked = true;
        modal.classList.remove("oscuro");
        todo.classList.remove("oscuro");
        titulo.classList.remove("oscuro");
        textarea.classList.remove("oscuro");
    }
 })