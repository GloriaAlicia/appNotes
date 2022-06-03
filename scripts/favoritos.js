function labelHeart(nuevaNota){
    let heart = (crearElementos("label","","favorite"));
    heart.setAttribute("for",nuevaNota.id);
    return heart;
}

function favorite(nuevaNota) {
    let buttonFavorite = (crearElementos("input","","hidden"));
    buttonFavorite.setAttribute("type","checkbox");
    buttonFavorite.setAttribute("id",nuevaNota.id);

    buttonFavorite.addEventListener("change",(event)=>{
        let notaActual = event.target.parentNode.parentNode;
        let idAqui = notaActual.getAttribute("number");

        // if(nuevaNota.favorite == true){
        //      buttonFavorite.checked = true;
        // }

        if(event.target.checked){
            notaActual.setAttribute("favorite", "true");
            gradientMash(notaActual);
        } else {
            notaActual.style.backgroundImage = "var(--primary-color)";
            notaActual.setAttribute("favorite", "false");
        }
        saveFavorite(idAqui, buttonFavorite);
    })
    return buttonFavorite;
}

/********************localStorage****************************** */

function saveFavorite(idAqui, buttonFavorite){
    let all = JSON.parse(localStorage.getItem("allNotes"));
    let nota = all.filter(element => element.id == idAqui);
    //de todas las notas, buscar la correcta por el id, ir al unico y primer elemento de la busqueda por id, ya que en localS esta en un array anidado de objetos
    let convertir = nota[0];

    if(buttonFavorite.checked){
        convertir.favorite = true;
    } else {
        convertir.favorite = false;
    }
    let convertJson = JSON.stringify(all);
    localStorage.setItem("allNotes",convertJson);
}

let color1 = "#d9bafeb0";
let color3 = "#f2bdf3c9";
let color4 = "#a4e2fbd2";


function gradientMash(element){
    element.style.backgroundImage = "radial-gradient(farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color1 +",rgba(0,0,0,0)),    radial-gradient(circle farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color3 +" 0%,rgba(0,0,0,0)60%),radial-gradient(circle farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color4 +" 0%,rgba(0,0,0,0)60%)";
}

function randomNumber(){
    let min = 0;
    let max = 100;
    let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    randomNumber += "%"
    return randomNumber;
}