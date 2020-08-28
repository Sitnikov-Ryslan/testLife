// Swiper

let mySwiper = new Swiper('.swiper-container', {
    
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: false,
    height: 972,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
})

// Modal
const body = document.querySelector('body');
const closeBtn = document.querySelector('.redactor-content__close');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__window');
const returnBtn = document.querySelector('.modal__return');

closeBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    body.classList.add('no-scroll');
    modal.classList.remove('hidden');

    let stopProp = function(evt) {
        evt.stopPropagation();
    }

    let closeModal = function(evt) {
        evt.preventDefault();
        body.classList.remove('no-scroll');
        modal.classList.add('hidden');
        modal.removeEventListener('click', closeModal);
        modalForm.removeEventListener('click', stopProp)
    }

    returnBtn.addEventListener('click', closeModal)
    modal.addEventListener('click', closeModal)
    modalForm.addEventListener('click', stopProp)
})

// Show avatar

let inputAva = document.querySelector('.redactor-content__avatar');
inputAva.addEventListener('change', function() {
    if (this.files[0]) {
        let fileReader = new FileReader();
        fileReader.addEventListener('load', function() {
            let imageAva = document.querySelector('.redactor-content__avatar-label');
            imageAva.style.background = `url("${fileReader.result}")`;
            imageAva.style.backgroundSize = 'cover';
        });
        fileReader.readAsDataURL(this.files[0]);
    };
});

// Add new answer

let lastQuestion = document.querySelector('.swiper-slide:last-child');
let addAnswerBtn = lastQuestion.querySelector('.answer-list__item-add');

let activationAddAnswer = function() {
    addAnswerBtn.addEventListener('click', /* (evt) => */() => {
    /* evt.preventDefault(); */
    let redactorQuestion = addAnswerBtn.closest('.redactor-content__question');
    let prevBlock = redactorQuestion.querySelector('.answer-list__item:nth-last-child(2)');
    let lastName = prevBlock.querySelector('.answer-list__input').name;
    let newName = Number(lastName) + 1;
    let parent = addAnswerBtn.closest('.answer-list__item');

    parent.insertAdjacentHTML('beforebegin', `<li class="answer-list__item">
    <label>
        <button type="button" class="answer-list__item-del">
            <span class="visually-hidden">Del</span>
        </button>
        <input class="answer-list__radio" name="question1" type="radio">
        <input class="answer-list__input" name="${newName}" type="text" placeholder="Ответ" minlength="5" maxlength="50">
        <span></span>
    </label>
    </li>`);
    })
}

activationAddAnswer();

//  Delete answer

let delAnswerBtns = document.querySelectorAll('.answer-list__item-del');

delAnswerBtns.forEach(function(elem) {
    elem.addEventListener('click', () => {
        let parent = elem.closest('.answer-list__item');
        parent.remove();
    });
});

//  Add new question

const addQuestionBtn = document.querySelector('.redactor-content__add-question');

addQuestionBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let lastBlock = document.querySelector('.swiper-slide:last-child');
    let lastName = lastBlock.querySelector('.answer-list__radio').name;
    let newName = Number(lastName) + 1;
     
    mySwiper.appendSlide(`<div class="swiper-slide">
    <fieldset class="redactor-content__question">
    <textarea class="redactor-content__question-text" name="question" placeholder="Вопрос" minlength="5" maxlength="150" required></textarea>
    <ul class="answer-list">
        <li class="answer-list__item">
            <button type="button" class="answer-list__item-del">
                <span class="visually-hidden">Del</span>
            </button>    
            <label>
                <input class="answer-list__radio" name="${newName}" type="radio" required>
                <input class="answer-list__input" name="1" type="text" placeholder="Ответ" minlength="5" maxlength="50" required>
                <span></span>
            </label>
        </li>
        <li class="answer-list__item">
            <button type="button" class="answer-list__item-del">
                <span class="visually-hidden">Del</span>
            </button>
            <label>
                <input class="answer-list__radio" name="${newName}" type="radio">
                <input class="answer-list__input" name="2" type="text" placeholder="Ответ" minlength="5" maxlength="50" required>
                <span></span>
            </label>
        </li>
        <li class="answer-list__item">
            <button type="button" class="answer-list__item-del">
                <span class="visually-hidden">Del</span>
            </button>
            <label>
                <input class="answer-list__radio" name="${newName}" type="radio">
                <input class="answer-list__input" name="3" type="text" placeholder="Ответ" minlength="5" maxlength="50">
                <span></span>
            </label>
        </li>
        <li class="answer-list__item">
            <button type="button" class="answer-list__item-del">
                <span class="visually-hidden">Del</span>
            </button>
            <label>
                <input class="answer-list__radio" name="${newName}" type="radio">
                <input class="answer-list__input" name="4" type="text" placeholder="Ответ" minlength="5" maxlength="50">
                <span></span>
            </label>
        </li>
        <li class="answer-list__item">
            <button class="answer-list__item-add" type="button">
                <span class="visually-hidden">Добавить ответ</span>
            </button>
        </li>
    </ul>
</fieldset>
</div>`);
    lastQuestion = document.querySelector('.swiper-slide:last-child');
    addAnswerBtn = lastQuestion.querySelector('.answer-list__item-add');
    activationAddAnswer();
});