'use strict';

console.log("Linked successfully!");

function loginHover() {
    document.getElementById('login-button').innerHTML = "sure?";
}

function loginOut() {
    document.getElementById('login-button').innerHTML = "Sign in";
}


function saveData() {
    let username, password;
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    let user_records = JSON.parse(localStorage.getItem('user_records')) || [];
    if (user_records.some((v) => {
        return v.username == username && v.password == password;
    })) {
        alert("Login successful!");
        setTimeout(() => {
            window.location.href = '/Portfolio-Mehmet-Schepens/HTML/home.html';
        }, 100);
    } else {
        alert("Invalid credentials, please try again!");
    }
}
