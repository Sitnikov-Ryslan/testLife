const header = document.querySelector('.header');
const testsHeight =  document.querySelector('.tests').offsetTop;
const nav = document.querySelector('.nav');

const body = document.querySelector('body');
const regBtn = document.querySelector('.header__user');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__window');

const likes = document.querySelectorAll('.test-preview__btn');

// Fixed Header

let fixedHeader = function() {
    let scrollOffset = window.pageYOffset;
    if (scrollOffset >= testsHeight) {
        nav.classList.add('show');
        header.classList.add('fixed');
    } else {
        nav.classList.remove('show');
        header.classList.remove('fixed');
    }
} 

fixedHeader();
window.addEventListener('scroll', fixedHeader);

// Show modal

regBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.classList.add('no-scroll');
    modal.classList.add('show');

    let stopProp = function(evt) {
        evt.stopPropagation();
    }

    let closeModal = function(evt) {
        evt.preventDefault();
        body.classList.remove('no-scroll');
        modal.classList.remove('show');
        modal.removeEventListener('click', closeModal);
        modalForm.removeEventListener('click', stopProp)
    }

    modal.addEventListener('click', closeModal)
    modalForm.addEventListener('click', stopProp)
})

// Toggle hearts

likes.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('pressed');
    })
})

// Swiper

let swipers = document.querySelectorAll('.swiper-container');

swipers.forEach(function(elem) {
    let mySwiper = new Swiper(elem, {
        
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 3,
        autoHeight: true,
    
        navigation: {
            nextEl: elem.parentNode.querySelector('.swiper-button-next'),
            prevEl: elem.parentNode.querySelector('.swiper-button-prev'),
          },
    })
})