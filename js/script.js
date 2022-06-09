// Sticky Nav Bar

let nav = document.querySelector("nav");

let val;

window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}

// Side navigation Menu

let body = document.querySelector("body")
let navBar = document.querySelector(".navbar")
let menuBtn = document.querySelector(".menu-btn")
let cancelBtn = document.querySelector(".cancel-btn")


menuBtn.onclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
}


cancelBtn.onclick = function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
}
