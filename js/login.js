//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    btn_ingresar.addEventListener("click", function(e){
        e.preventDefault();
        sessionStorage.setItem("usuario", document.getElementById('user').value);
        sessionStorage.setItem("password", document.getElementById('password').value);
   
        if (document.getElementById('user').value.length <= 5 || document.getElementById('password').value.length <=5){
            alert('El usuario o la contraseña deben tener un minimo de 5 digitos');
        }else{
            alert(document.getElementById('user').value +', que bueno verte otra vez por acá');
            location.href="index.html";
        }
    });   
});

