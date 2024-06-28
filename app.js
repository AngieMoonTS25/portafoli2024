/*selecciones para la barra de navegacion burger */
const burguer = document.querySelector("#burguer-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burguer.addEventListener("click", ()=>{
    ul.classList.toggle("show");
});

//cerrar el menu burguer
const navLink= document.querySelectorAll(".nav-link"); 

navLink.forEach((link) => 
    link.addEventListener("click", ()=> {
        ul.classList.remove("show");
    })
);

//seleccion de desplazar hacia arriba 
const scrollUp = document.querySelector("#scroll-up");

//funcionalidad de desplazar hacia arriba
scrollUp.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});