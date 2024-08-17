const formulario = document.querySelector(".formulario")
const mascaraFormulario = document.querySelector(".mascara-formulario")

function mostrarForm(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascaraFormulario.style.visibility = "visible"
}

function esconderForm(){
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascaraFormulario.style.visibility = "hidden"
}