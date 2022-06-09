/**learning to use classes */
document.querySelector(".openModal").addEventListener("click", ()=>{
    document.getElementById("form-To-do").classList.remove("hidden");
})
/**cada objeto es como una función solo deberia hacerlo algo especifico
objeto lista
    titulo
    tarea individual con subtareas
*/
class lista {
    // Getting Form Values
    constructor(title,task) {
        this.titulo = title;
        this.task = task
    }
    //métodos
    crearPredeterminado(where){
        let lista = this.crearElementos("article","","notes")
        lista.appendChild(this.crearElementos("h3", this.titulo,"title"));
        document.querySelector(where).appendChild(lista);
        this.crearTarea(lista);
        // let options = document.createElement("div");
        // options.classList.add("options");
        // lista.appendChild(options);
        // options.appendChild(eliminar());
        // options.appendChild(favorite(nuevaNota));
        // options.appendChild(labelHeart(nuevaNota));
        // options.appendChild(crearElementos("p", "editar","editar"));
    }

    crearModal(){
        //
    }
    crearTarea(where){
        where.appendChild(this.crearElementos("p",this.task,"text"));
    }
    crearBarraDeProgreso(n){
        let porcentaje = Math.floor(100/n);
    }

    crearElementos(element,dato,clase) {
        let creando = document.createElement(element);
        creando.classList.add(clase);
        creando.textContent = dato;
        return creando;
    }

}

document.getElementById("agregarNuevaLista").addEventListener("click", (e)=>{
    e.preventDefault();
    let title = document.getElementById("to-doTitulo").value;
    let task = document.getElementById("task").value;

    const nuevaLista = new lista(title,task); //usar la palabra new para que no asigne propiedades al objeto superior
    nuevaLista.crearPredeterminado(".wrapper");

})

let numberOfTask = 0
document.getElementById("moreTasks").addEventListener("click",(e)=>{
    e.preventDefault();
    numberOfTask++
    if(numberOfTask <= 5){
        console.log(numberOfTask)
    }
})

document.getElementById("cerrarModalTO").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("form-To-do").classList.add("hidden");
})