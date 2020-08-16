// Swiper

    let mySwiper = new Swiper('.swiper-container', {
        
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 1,
        autoHeight: true,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })

// Like press
const like = document.querySelector('.test-content__like');

like.addEventListener('click', () => {
    like.classList.toggle('pressed');
})

// Test begin

const continueBtn = document.querySelector('.test__continue');
const startBtn = document.querySelector('.test__start');
const beginBtn = document.querySelector('.test-content__begin');
const controlBtns = document.querySelector('.test__control-btns');
const counterQuestions = document.querySelector('.test__counter-questions');
const infoPage = document.querySelector('.test-content__info');
const questionsList = document.querySelector('.questions-list');
const nextQuestBtn = document.querySelector('.swiper-button-next');
const prevQuestBtn = document.querySelector('.swiper-button-prev');

const actualQuest = document.querySelector('.test__actual-question');
const totalQuest = document.querySelector('.test__total-questions');

let findActiveQuest = function() {
    let questList = document.querySelectorAll('.questions-list__item');
    totalQuest.textContent = questList.length;
    for (let i = 0; i < questList.length; i++) {
        if (questList[i].classList.contains('swiper-slide-active')) {
            actualQuest.textContent = i + 1;
        }
        // почему то если сюда добавить ветку else то срабатывает и основная и else
        // else {actualQuest.textContent = totalQuest.textContent}
    }
}

let testBegin = function() {
    controlBtns.classList.add('hidden');
    infoPage.classList.add('hidden');
    questionsList.classList.remove('hidden');
    nextQuestBtn.classList.remove('hidden');
    prevQuestBtn.classList.remove('hidden');
    counterQuestions.classList.remove('hidden');
    
    continueBtn.removeEventListener('click', testBegin);
    startBtn.removeEventListener('click', testBegin);
    beginBtn.removeEventListener('click', testBegin);

    findActiveQuest();
    nextQuestBtn.addEventListener('click', findActiveQuest);
    prevQuestBtn.addEventListener('click', findActiveQuest);
}

continueBtn.addEventListener('click', testBegin);
startBtn.addEventListener('click', testBegin);
beginBtn.addEventListener('click', testBegin);

// Show resultTestBtn

const forms = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.questions-list__answer');
const resultTestBtn = document.querySelector('.test-content__forms-submit-btn');

answers.forEach(function(elem) {
    elem.addEventListener('change', function() {
        let checkedAnswers = document.querySelectorAll('input[type=radio]:checked');
        
        if (checkedAnswers.length === forms.length) {
            resultTestBtn.classList.remove('hidden');
        } else {
            resultTestBtn.classList.add('hidden');
        }    
    })
})

// Send all forms

