const app = ()=> {
    navigationSlide();
}
var typed = new Typed('.type', {
    strings: ["visual enthusiast", "web developer", "ui designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
const navigationSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');

    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('navActive');
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navigationFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Animate the Burger 
        burger.classList.toggle('toggle');
    });    
}
navigationSlide();