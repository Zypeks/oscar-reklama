const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
    
        //Animate links
        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}
const navstick = () => {
    window.addEventListener('scroll',function(){
        var header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0);
    })
};
navstick();
navSlide();


const slider = document.querySelector('.slider');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');

let slideIndex = 0;
const slideCount = slider.querySelectorAll('.slide').length;

function showSlide() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

showSlide();

prevSlideBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slideCount - 1;
  }
  showSlide();
});

nextSlideBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slideCount) {
    slideIndex = 0;
  }
  showSlide();
});


var menuItems = document.querySelectorAll('.produkty');

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseover', function() {
    this.classList.add('show');
  });

  menuItems[i].addEventListener('mouseout', function() {
    this.classList.remove('show');
  });
}
