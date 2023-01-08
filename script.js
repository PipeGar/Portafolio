// funcion para quitar el menu cuando se selecciona en responsive  
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";



    // Se ususa para desaparecer el menu
    var x = document.getElementById("nav");
    x.className = "";


}


//Funcion de menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className=== "") {
        x.className = "responsive";
    }else{
        x.className = "";
    }
}


// deteccion del scrolling para realizar las animaciones de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

// funcion para aplicar las animaciones de las barras de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}