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

// Fetch 

let regForm = document.querySelector('.registration');
let autForm = document.querySelector('.authorization');

let sendRequest = function(e, form) {
    e.preventDefault();

    let URL = form.action;
    let method = form.method;

    let response = fetch(URL, {
        method: method,
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                if (response.status === 201 || response.status === 204) {
                    location.assign = 'http://l91287uv.beget.tech/home';
                }
            }})
            .then(error => {
                console.log(error); /* undefined */
                
                // form.classList.add('hidden');
                // let msgBlock = document.querySelector('.modal__error');
                // msgBlock.classList.remove('hidden');
                // let msg = document.querySelector('.modal__message');
                // msg.textContent = error.message;
                // let closeBtn = document.querySelector('.modal__error-close');
                // closeBtn.addEventListener('click', function(evt) {
                //     evt.preventDefault();
                //     msgBlock.classList.add('hidden');
                //     form.classList.remove('hidden');
                // })
            })
}


regForm.addEventListener('submit', (evt) => sendRequest(evt, regForm));
autForm.addEventListener('submit', (evt) => sendRequest(evt, autForm));

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

regBtn.addEventListener('click', function(evt) {
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

let postData = function(URL, item, amount) {
        let data = {};
        data = item.closest('.test-preview').dataset.test_id;
        
        let response = fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(
                {'test_id': data})
        })
            .then(response => {
                amount = response.json()
            })
            .catch(error => console.log(error))
}

likes.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        elem.classList.toggle('pressed');
        let press = elem.classList.contains('pressed');
        let quantity = elem.closest('.test-preview__quantity');

        if (press) {
            postData('http://l91287uv.beget.tech/like/add', elem, quantity);
        } else {
            postData('http://l91287uv.beget.tech/like/delete', elem, quantity);
        }
    })
})

// Toggle forms

const accountToggleBtn = document.querySelector('.authorization__account');
const loginToggleBtn = document.querySelector('.registration__login');
const accForm = document.querySelector('.registration');
const logForm = document.querySelector('.authorization');
const modalTitle = document.querySelector('.modal__title');
const modalError = document.querySelectorAll('.modal__error');

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


// Validate passwords

let validatePasswords = function(elem) {
    let form = elem.parentNode;
    let passwords = form.querySelectorAll('input[type=password]');
    let submitBtn = form.querySelector('button[type=submit]');
    let errorMsg = form.querySelector('div');

    if (passwords[0].value !== "" && passwords[1].value !== "") {
        if (passwords[0].value == passwords[1].value) {
            submitBtn.disabled = false;
            errorMsg.classList.add('hidden');
        } else {
            submitBtn.disabled = true;
            errorMsg.textContent = 'Ошибка: Пароли не совпадают';
            errorMsg.classList.remove('hidden');
        }
    } 
}

// Filled forms inputs

const loginNameInput = document.querySelector('.authorization__input_name');
const loginMailInput = document.querySelector('.authorization__input_email');
const loginPassInput = document.querySelector('.authorization__input_pass');
const loginPassRepeatInput = document.querySelector('.authorization__input_pass-repeat');

loginNameInput.addEventListener('change', function() {
	if (loginNameInput.value !== '') {
        loginNameInput.classList.add('filled');
	} else {
		loginNameInput.classList.remove('filled');
	};
});

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
    validatePasswords(loginPassInput);
	} else {
		loginPassInput.classList.remove('filled');
	};
});

loginPassRepeatInput.addEventListener('change', function() {
	if (loginPassRepeatInput.value !== '') {
    loginPassRepeatInput.classList.add('filled');
    validatePasswords(loginPassRepeatInput);
	} else {
		loginPassRepeatInput.classList.remove('filled');
	};
});

const accountNameInput = document.querySelector('.registration__input_name');
const accountMailInput = document.querySelector('.registration__input_email');
const accountPassInput = document.querySelector('.registration__input_pass');
const accountPassRepeatInput = document.querySelector('.registration__input_pass-repeat');

accountNameInput.addEventListener('change', function() {
	if (accountNameInput.value !== '') {
        accountNameInput.classList.add('filled');
	} else {
		accountNameInput.classList.remove('filled');
	};
});

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
    validatePasswords(accountPassInput);
	} else {
		accountPassInput.classList.remove('filled');
	};
});

accountPassRepeatInput.addEventListener('change', function() {
	if (accountPassRepeatInput.value !== '') {
    accountPassRepeatInput.classList.add('filled');
    validatePasswords(accountPassRepeatInput);
	} else {
		accountPassRepeatInput.classList.remove('filled');
	};
});

// Email fetch

const forms = document.querySelectorAll('form');

let fetchMail = function(elem, message, block) {
    let data = {};
    data = elem.value;
    
    let response = fetch('http://l91287uv.beget.tech/email/exist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(
            {'email': data})
    })
        .then(response => {
            response.text();
            message.classList.add('hidden');
        })
        .catch(error => {
            message.classList.remove('hidden');
            message.textcontent = error.message;
        })
}

forms.forEach(function(form) {
    let input = form.querySelector('input[type = email]');
    let msg = form.querySelector('div');

    input.addEventListener('change', (evt) => {
        evt.preventDefault();
        fetchMail(input, msg, form);
    });
});

// Footer info

let footerInfoAbout = document.querySelector('.footer__info-about');
let footerInfoService = document.querySelector('.footer__info-service');
let footerAbout = document.querySelector('.footer__about');
let footerService = document.querySelector('.footer__service');

footerAbout.addEventListener('click', () => {
    footerInfoAbout.classList.toggle('hidden');
    let showService = footerInfoService.classList.contains('hidden');
    if (!showService) {
        footerInfoService.classList.add('hidden');
    };
});

footerService.addEventListener('click', () => {
    footerInfoService.classList.toggle('hidden');
    let showService = footerInfoAbout.classList.contains('hidden');
    if (!showService) {
        footerInfoAbout.classList.add('hidden');
    };
});