'use strict'

console.log("Linked succesfully!");

document.getElementById('login-button').addEventListener('click', function(){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'Mehmet' && password === '1002'){
        window.location.href = 'home.html';  
    }else{
        alert('Ongeldige gegevens, probeer opnieuw!')
    }
});

function loginHover(){
    document.getElementById('login-button').innerHTML = "sure?";
};

function loginOut(){
    document.getElementById('login-button').innerHTML = "Sign in";
}



