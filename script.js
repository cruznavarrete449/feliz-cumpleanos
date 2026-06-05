function abrirSorpresa(){

    document.getElementById("mensaje").style.display = "block";

    document.getElementById("mensaje").style.animation = "aparecer 1s";

    document.body.style.background = "#fff8dc";

    document.getElementById("musica").play();

}

let colores = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "pink",
    "cyan"
];

let indice = 0;

function cambiarColor(){

    document.body.style.backgroundColor = colores[indice];

    indice++;

    if(indice >= colores.length){
        indice = 0;
    }

}