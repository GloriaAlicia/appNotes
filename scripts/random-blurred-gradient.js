function favorite() {
    let buttonFavorite = (crearElementos("button","","favorite"));

    buttonFavorite.addEventListener("click", (event)=>{
        let notaActual = event.target.parentNode.parentNode;
        notaActual.setAttribute("favorite", "true");
      //  let favorite = notaActual.getAttribute("number");
        gradientMash(notaActual);
        localStorage.setItem("favorites","true");
    })
    return buttonFavorite;
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