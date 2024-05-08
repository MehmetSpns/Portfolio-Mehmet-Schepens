'use strict';

console.log("Linked successfully!");

function loginHover() {
    document.getElementById('login-button').innerHTML = "sure?";
}

function loginOut() {
    document.getElementById('login-button').innerHTML = "Sign in";
}


function checkLogs() {
    var username = document.getElementById('username2').value.trim();
    var password = document.getElementById('password2').value.trim();

    var users = JSON.parse(localStorage.getItem('users'));

    var user = users.find((user) => user.username === username);
    console.log(user);
    if (user) {
        if (user.password === password) {
            setTimeout(() => {
                window.location.href = '/Portfolio-Mehmet-Schepens/HTML/home.html';
            }, 100);
        } else {
            alert('Wrong password!');
        }
    } else {
        alert('Username does not exist!');
    }
}




