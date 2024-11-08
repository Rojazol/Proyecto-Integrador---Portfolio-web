// 1. Menú Responsivo
let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

  //oculto el menu una vez que selecciono una opcion
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


    // Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");

    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HTML");
        habilidades[1].classList.add("CSS");
        habilidades[2].classList.add("Csharp");
        habilidades[3].classList.add("SQL");
        habilidades[4].classList.add("PYTHON");
        habilidades[5].classList.add("PostgreSQL");
        habilidades[6].classList.add("xampp");
        habilidades[7].classList.add("PHP");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// 3. Animación de Cursos
document.addEventListener('DOMContentLoaded', function () {
    const cursos = document.querySelectorAll('.curso');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que es visible
            }
        });
    }, { threshold: 0.1 });

    cursos.forEach(curso => observer.observe(curso));
});
