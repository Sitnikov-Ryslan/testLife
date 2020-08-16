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

// Fixed Header

const header = document.querySelector('.header');
const testsHeight =  document.querySelector('.tests').offsetTop;
const nav = document.querySelector('.nav');

const body = document.querySelector('body');
const regBtn = document.querySelector('.header__user');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__window');

const likes = document.querySelectorAll('.test-preview__btn');

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

// Toggle forms

const accountToggleBtn = document.querySelector('.authorization__account');
const loginToggleBtn = document.querySelector('.registration__login');
const accForm = document.querySelector('.registration');
const logForm = document.querySelector('.authorization');
const modalTitle = document.querySelector('.modal__title');

accountToggleBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	accForm.classList.remove('hidden');
    logForm.classList.add('hidden');
    modalTitle.textContent = 'Регистрация';
});

loginToggleBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	logForm.classList.remove('hidden');
    accForm.classList.add('hidden');
    modalTitle.textContent = 'Авторизация';
});

// Filled forms inputs

const loginMailInput = document.querySelector('.authorization__input_email');
const loginPassInput = document.querySelector('.authorization__input_pass');

loginMailInput.addEventListener('change', function() {
	if (loginMailInput.value !== '') {
	loginMailInput.classList.add('filled');
	} else {
		loginMailInput.classList.remove('filled');
	};
});

loginPassInput.addEventListener('change', function() {
	if (loginPassInput.value !== '') {
	loginPassInput.classList.add('filled');
	} else {
		loginPassInput.classList.remove('filled');
	};
});

const accountMailInput = document.querySelector('.registration__input_email');
const accountPassInput = document.querySelector('.registration__input_pass');

accountMailInput.addEventListener('change', function() {
	if (accountMailInput.value !== '') {
	accountMailInput.classList.add('filled');
	} else {
		accountMailInput.classList.remove('filled');
	};
});

accountPassInput.addEventListener('change', function() {
	if (accountPassInput.value !== '') {
	accountPassInput.classList.add('filled');
	} else {
		accountPassInput.classList.remove('filled');
	};
});