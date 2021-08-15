//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});
let usuario= document.getElementById("user").Value;
let password= document.getElementById("password").Value;

btn_ingresar.addEventListener('click', function(evento){
    evento.preventDefault()
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contrasenia", password);
    location.href = 'index.html'
})

