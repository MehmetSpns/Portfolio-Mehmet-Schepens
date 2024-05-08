'use strict';

console.log("Linked successfully!");

function loginHover() {
    document.getElementById('save-button').innerHTML = "sure?";
}

function loginOut() {
    document.getElementById('save-button').innerHTML = "Register";
}

function saveData() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert("Please fill in all fields!");
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((v) => v.username === username)) {
        alert("Username already exists");
        return;
    } else {
        users.push({
            "username": username,
            "password": password
        });
        localStorage.setItem("users", JSON.stringify(users));
        setTimeout(() => {
            window.location.href = '/Portfolio-Mehmet-Schepens/HTML/login.html';
        }, 100);
        return;
    }
}

