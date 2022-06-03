let campoFiltro = document.querySelector("#filtrar");

campoFiltro.addEventListener("input", filtrar);
function filtrar() {
    let escribiendo = campoFiltro.value;
    let notas = document.querySelectorAll(".notes");

    if(escribiendo.length > 0){
        for (let i = 0; i < notas.length; i++) {
            let nota = notas[i];
            let texto = nota.querySelector(".text").textContent;
            
            let expresion = new RegExp(escribiendo, "i")
            if(!expresion.test(texto)){
                nota.classList.add("hidden");
            }
        }
    }else{
        for (let i = 0; i < notas.length ; i++){
            let nota = notas[i];
            nota.classList.remove("hidden");
        }    
    } 
}