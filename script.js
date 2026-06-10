function abrirSorpresa(){

    document.getElementById("mensaje").style.display = "block";

    document.getElementById("mensaje").style.animation = "aparecer 1s";

    document.body.style.background = "#fff8dc";

    document.getElementById("musica").play();

    crearGlobos();    

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


function crearGlobos(){

    const contenedor = document.getElementById("globos");

    const colores = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan"
    ];

    for(let i = 0; i < 30; i++){

        let globo = document.createElement("div");

        globo.classList.add("globo");

        globo.style.left = Math.random()*100 + "%";

        globo.style.backgroundColor =
        colores[Math.floor(Math.random()*colores.length)];

        globo.style.animationDuration =
        (Math.random()*3 + 4) + "s";

        contenedor.appendChild(globo);

        setTimeout(()=>{
            globo.remove();
        },7000);

    }

}