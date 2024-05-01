'use strict';

console.log("Linked successfully!");

function loginHover() {
    document.getElementById('save-button').innerHTML = "sure?";
}

function loginOut() {
    document.getElementById('save-button').innerHTML = "Register";
}

function saveData() {
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert("Please fill in all fields!");
        return;
    }

    let user_records = JSON.parse(localStorage.getItem('user_records')) || [];
    if (user_records.some((v) => v.username === username)) {
        alert("Username already exists");
    } else {
        user_records.push({
            "username": username,
            "password": password
        });
        localStorage.setItem("user_records", JSON.stringify(user_records));
        setTimeout(() => {
            window.location.href = '/Portfolio-Mehmet-Schepens/HTML/login.html';
        }, 100);
    }
}
