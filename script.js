function abrirSorpresa(){

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

    let boton = document.getElementById("botonColor");

    let color =
    "#" + Math.floor(Math.random()*16777215).toString(16);

    boton.style.backgroundColor = color;

}

    document.getElementById("mensaje").style.display = "block";

    document.getElementById("mensaje").style.animation = "aparecer 1s";

    document.body.style.background = "#fff8dc";

    document.getElementById("musica").play();

}