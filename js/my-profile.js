//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {


    let usuarios = [

    ];

document.getElementById("saveUserData").addEventListener("click", function(){
    let userData = {
        usuario: localStorage.getItem("usuario"),
        nombreYApellidos: document.getElementById("nameAndSurname").value,
        age: document.getElementById("userAge").value,
        email: document.getElementById("userEmail").value,
        phoneNumber: (document.getElementById("userPhoneNumber")).value
    };
    usuarios.push(userData);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    let usuariosParse = JSON.parse(localStorage.getItem('usuarios'));
    document.getElementById("nameSurname").innerHTML = usuariosParse[usuariosParse.length -1].nombreYApellidos;
    document.getElementById("age").innerHTML = usuariosParse[usuariosParse.length -1].age;
    document.getElementById("email").innerHTML = usuariosParse[usuariosParse.length -1].email;
    document.getElementById("phoneNumber").innerHTML = usuariosParse[usuariosParse.length -1].phoneNumber;
    
})

if (localStorage.usuarios){
    let usuariosParse = JSON.parse(localStorage.getItem('usuarios'));
document.getElementById("nameSurname").innerHTML = usuariosParse[usuariosParse.length -1].nombreYApellidos;
document.getElementById("age").innerHTML = usuariosParse[usuariosParse.length -1].age;
document.getElementById("email").innerHTML = usuariosParse[usuariosParse.length -1].email;
document.getElementById("phoneNumber").innerHTML = usuariosParse[usuariosParse.length -1].phoneNumber;
}




});