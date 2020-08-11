const header = document.querySelector('.header');
const testsHeight =  document.querySelector('.tests').offsetTop;
const nav = document.querySelector('.nav');
const btnsBlocks = document.querySelectorAll('.btns');

const body = document.querySelector('body');
const regBtn = document.querySelector('.header__btn');
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

let myFirstSwiper = new Swiper('.swiper-container_first', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next_first',
        prevEl: '.swiper-button-prev_first',
      },
})

let mySecondSwiper = new Swiper('.swiper-container_second', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next_second',
        prevEl: '.swiper-button-prev_second',
      },
})

let myThirdSwiper = new Swiper('.swiper-container_third', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next_third',
        prevEl: '.swiper-button-prev_third',
      },
})

let myFourthSwiper = new Swiper('.swiper-container_fourth', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next_fourth',
        prevEl: '.swiper-button-prev_fourth',
      },
})

let myFifthSwiper = new Swiper('.swiper-container_fifth', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next_fifth',
        prevEl: '.swiper-button-prev_fifth',
      },
})

let mySixthSwiper = new Swiper('.swiper-container_sixth', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next_sixth',
        prevEl: '.swiper-button-prev_sixth',
      },
})