// aqui agregamos la funcionalidad del boton para abrir el menu de hamburguesa y le debemos agrgear los correspondientes id a cada botn y al nav

//creamos nuestros 3 elementos llamados desde java
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


//ahora agregamos el llamado al avento para que comiece hacer la funcion de mostrar el menu

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
})

