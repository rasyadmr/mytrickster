function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function navToggle() {
    var nav = document.getElementById('nav-list');

    nav.classList.toggle("show");
}

let form = document.getElementById('register');
let registered = []

class User {
    constructor(fullname, username, email, age, gender, password) {
        this.fullname = fullname
        this.username = username
        this.email = email
        this.age = age
        this.gender = gender
        this.password = password
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()

    let fullname = document.getElementById('fullname').value
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let age = document.getElementById('age').value
    let gender = document.getElementById('gender').value
    let password = document.getElementById('password').value
    let confirm = document.getElementById('confirm').value
    let terms = document.getElementById('terms').checked
    let error = document.getElementById('error')


    if (fullname == "") {
        error.innerHTML = "Enter your full name!"
    } else if (fullname.length < 8) {
        error.innerHTML = "Full name must equal or more than 8 characters"
    } else if (username == "") {
        error.innerHTML = "Enter your username!"
    } else if (username.length < 5) {
        error.innerHTML = "Username must equal or more than 5 characters!"
    } else if (registered.find(e => e.username === username)) {
        error.innerHTML = "Username already registered!"
    } else if (email == "") {
        error.innerHTML = "Enter your email!"
    } else if (!String(email).includes('@')) {
        error.innerHTML = "Email not valid!"
    } else if (age == "" || Number(age) === 0) {
        error.innerHTML = "Enter your age!"
    } else if (gender == "null") {
        error.innerHTML = "Choose your gender!"
    } else if (password == "") {
        error.innerHTML = "Enter your Password!"
    } else if (password.length < 8) {
        error.innerHTML = "Password must equal or more than 8 characters!"
    } else if (confirm == "") {
        error.innerHTML = "Enter your Confirmation Password!"
    } else if (password !== confirm) {
        error.innerHTML = "The confirmation password doesn't matched!"
    } else if (!terms) {
        error.innerHTML = "You must agree with terms and conditions!"
    } else {
        registered.push(new User(fullname, username, email, age, gender, password))
        window.location.href = "./../Home/home.html"
    }
})