//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    btn_guardar.addEventListener("click", function(e){
        e.preventDefault();
        sessionStorage.setItem("usuario", user.value);
        sessionStorage.setItem("password", password.value);
   
        location.href="index.html";
   
    });
    btn_ingresarr.addEventListener('click', function(e){
        e.preventDefault();

        window.location.href.endsWith ="index.html";
    });
    
});

btn_ingresarrr.addEventListener("click",function(e){
    e.preventDefault();
    location.href ="C:\Users\Facundo\Documents\GitHub\japecommerce\index.html";
})

