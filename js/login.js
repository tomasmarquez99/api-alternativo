
document.addEventListener("DOMContentLoaded", function(){

document.getElementById('submition').addEventListener('click', function() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let camposCompletos = true;


    if (email.value === '') {
        camposCompletos = false
    }

    if (password.value === '') {
        camposCompletos = false
    } 

    if (camposCompletos){
        window.location = "index.html"
    }

})

localStorage.setItem('usuario', email.value);

})
