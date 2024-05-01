'use strict'

console.log("Linked succesfully!");

document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();
    var username = document.getElementById('username2').value;
    var password = document.getElementById('password2').value;

    if(username === 'Mehmet' && password === '1002'){
        window.location.href = 'home.html';  
    }else{
        alert('Invalid credentials, please try again!');
    }
});


function loginHover(){
    document.getElementById('login-button').innerHTML = "sure?";
};

function loginOut(){
    document.getElementById('login-button').innerHTML = "Sign in";
}


