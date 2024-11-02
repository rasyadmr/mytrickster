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

let gameplayIndex = 1;
showGameplay(gameplayIndex);

// Next/previous controls
function plusGameplay(n) {
    showGameplay(gameplayIndex += n);  
}

// Thumbnail image controls
function currentGameplay(n) {
    showGameplay(gameplayIndex = n);
}

function showGameplay(n) {
    let slides = document.getElementsByClassName("gameplay-item");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        gameplayIndex = 1;
    }
    
    if (n < 1) {
        gameplayIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[gameplayIndex-1].style.display = "flex";
    dots[gameplayIndex-1].className += " active";
}

let heistIndex = 1;
showHeist(heistIndex);

// Next/previous controls
function plusHeist(n) {
    showHeist(heistIndex += n);  
}

// Thumbnail image controls
function currentHeist(n) {
    showHeist(heistIndex = n);
}

function showHeist(n) {
    let slides = document.getElementsByClassName("heist-item");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        heistIndex = 1;
    }
    
    if (n < 1) {
        heistIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[heistIndex-1].style.display = "flex";
    dots[heistIndex-1].className += " active";
}

setInterval(() => {
    showGameplay(gameplayIndex += 1);
    showHeist(heistIndex += 1);
}, 3000);