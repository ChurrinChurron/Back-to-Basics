let navMovil = document.querySelector("#navMovil");
let navSub = document.querySelector("#navSubmovil");
let cerrarNav = document.querySelector("#cerrBtn");
let cerrarSub = document.querySelector("#cerrBtnDos");
let navBtn = document.querySelector("#navBtn");
let linkSoluc = document.querySelector("#solucionBtnNav");

navBtn.addEventListener("click", () => {
    navMovil.classList.add("abrir");
})

linkSoluc.addEventListener("click", () => {
    navSub.classList.add("abrir");
})

cerrarNav.addEventListener("click", () => {
    navMovil.classList.remove("abrir");
})

cerrarSub.addEventListener("click", () => {
    navSub.classList.remove("abrir");
})