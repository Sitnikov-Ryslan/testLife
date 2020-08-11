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

// Show modal

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
    const closeModalBtn = document.querySelector('.modal__close');
    closeModalBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        body.classList.remove('no-scroll');
        modal.classList.remove('show');
    })
})

// Toggle hearts

likes.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('pressed');
    })
})

// Slider

// let position = 0;
// const slidesToShow = 3;
// const slidesToScroll = 1;
// const container = document.querySelector('.tests-item');
// const track = document.querySelector('.tests-list');
// const btnPrev = document.querySelector('.btn-prev');
// const btnNext = document.querySelector('.btn-next');
// const items = document.querySelectorAll('.test')
// const itemsCount = items.length;
// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;

// items.forEach((item) => {
//     item.style.minWidth = `${itemWidth}px`
// });

// btnNext.addEventListener('click', () => {
//     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     setPosition();
//     checkBtns();
// });

// btnPrev.addEventListener('click', () => {
//     const itemsLeft = Math.abs(position) / itemWidth;

//     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     setPosition();
//     checkBtns();
// });

// const setPosition = () => {
//     track.style.transform = `translateX(${position}px)`
// };

// const checkBtns = () => {
//     btnPrev.disabled = position === 0;
//     btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
// };

// checkBtns();