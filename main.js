// Mobile Menu

var menu = document.getElementsByClassName('menu-btn')[0];
    body = document.getElementsByClassName('body-wrap')[0];
    const mob = document.getElementsByClassName('mobile-nav')[0];

    menu.addEventListener('click', toggleNav);

    function toggleNav(event){
        event.preventDefault();
        body.classList.toggle('open');
        mob.classList.toggle('mobile');
        menu.classList.toggle('close');
    }


// Slider


const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const auto = true;
const time = 10000;
let slideTime;


const next = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    } else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prev = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    } else{
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

nextBtn.addEventListener('click', e => {
    next();
    if (auto) {
        clearInterval(slideTime);
        slideTime = setInterval(next, time);
      }
});

prevBtn.addEventListener('click', e => {
    prev();
    if (auto) {
        clearInterval(slideTime);
        slideTime = setInterval(next, time);
      }
});

if (auto){
    slideTime = setInterval(next, time);
}



// Scroll Trigger


let tl = gsap.timeline ({
    scrollTrigger: {
        trigger: '.services-content', 
        start: "65%",  
    }
});

tl.from('.about-img', {x: 200, opacity: 0, duration: 0.9}),
tl.from(".txt", {x: -250, opacity: 0, duration: 1}, "-=1");
