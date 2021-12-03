const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('nav');
let opened = false;

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    if(!opened){
        hamburger.src = "./images/icon-close.svg";
        opened = !opened ;
    }else{
        hamburger.src = "./images/icon-hamburger.svg";
        opened = !opened ;
    }
    console.log(opened);
})