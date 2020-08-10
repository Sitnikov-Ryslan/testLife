const header = document.querySelector('.header');
const testsHeight =  document.querySelector('.tests').offsetTop;
const nav = document.querySelector('.nav');
const btnsBlocks = document.querySelectorAll('.btns');

const body = document.querySelector('body');
const regBtn = document.querySelector('.header-btn');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal-window');

const likes = document.querySelectorAll('.test-statistic__btn');

// Fixed Header

let fixedHeader = function() {
    let scrollOffset = window.pageYOffset;
    if (scrollOffset >= testsHeight) {
        nav.classList.add('show');
        header.classList.add('fixed');
        btnsBlocks.forEach(elem => elem.classList.add('hidden'));
    } else {
        nav.classList.remove('show');
        header.classList.remove('fixed');
        btnsBlocks.forEach(elem => elem.classList.remove('hidden'));
    }
} 

document.addEventListener("DOMContentLoaded", fixedHeader);
window.addEventListener('scroll', fixedHeader)

// Modal form

regBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.classList.add('no-scroll');
    modal.classList.add('show');
    modal.addEventListener('click', (evt) => {
        evt.preventDefault();
        body.classList.remove('no-scroll');
        modal.classList.remove('show');
    })
    modalForm.addEventListener('click', (evt) => {
        evt.stopPropagation();
    })
})

// Toggle hearts

likes.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('pressed');
    })
})