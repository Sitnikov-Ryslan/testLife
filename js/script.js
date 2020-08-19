const testForm = document.querySelector('.questions-list');
const fieldsets = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.questions-list__answer');
const resultTestBtn = document.querySelector('.test-content__forms-submit-btn');
const tesultText = document.querySelector('.test-content__result-text');

// Fetch 

// Отправка решенного теста для получения результата
let sendTest = function(form) {
    let URL = form.action;
    let method = form.method;
    let testArray = [];/* Это не я креативщик, это бэку так надо:) */
    let formData = new FormData();
    
    fieldsets.forEach((fieldset) => {
        let questionName = fieldset.dataset.question;
        let answerName = fieldset.querySelector('input[type=radio]:checked').dataset.answer;
        testArray.push(questionName, answerName);
    })

    formData.append('answers', testArray);

    let response = fetch(URL, {
        method: method,
        body: formData
    })
        .then(response => {
            resultText = response.json()
        })
        .catch(error => console.log(error))
}

testForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendTest(testForm)
});

// По кнопке "продолжить" пользователю должен вылазить вопрос на котором остановился
const continueBtn = document.querySelector('.test__continue');
// По кнопке "начать заново", тест должен обнулиться и начаться заново
const startBtn = document.querySelector('.test__start');

let getResponse = function(URL) {
    
    let response = fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

continueBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    getResponse('someURL')
});
startBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    getResponse('someURL');
});

let postResponse = function(URL) {
    let data = [];
    
    fieldsets.forEach((elem) => {
        let questionName = elem.dataset.question;
        let reply = elem.querySelector('input[type=radio]:checked');
        if (reply !== null) {
            let answerName = reply.dataset.answer;
            data.push(questionName, answerName);
        } else {
        data.push(questionName, 0);
        }
    })
    
    let response = fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

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

like.addEventListener('click', function() {
    like.classList.toggle('pressed');
});

// Test begin

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

let foundCheckedAnswers = function() {
    let checkedAnswers = document.querySelectorAll('input[type=radio]:checked');
    
    if (checkedAnswers.length === fieldsets.length) {
        resultTestBtn.classList.remove('hidden');
    } else {
        resultTestBtn.classList.add('hidden');
    }    
}

// Style for label

let checkAnswerLabel = function(label) {
    let par = label.closest('.question');
    let radios = par.querySelectorAll('input[type=radio]');
    
    for (let radio of radios) {
        if (!radio.checked) {
            radio.parentNode.classList.remove('checked');
        }
    }
}

answers.forEach(function(elem) {
    elem.addEventListener('change', foundCheckedAnswers);

    elem.addEventListener('change', function() {  
        elem.parentNode.classList.add('checked');
        checkAnswerLabel(elem.parentNode);

        postResponse('someURL');
    })
})


// Show result of test

const resultPage = document.querySelector('.test-content__result');

let showResultTest = function() {
    
    resultPage.classList.remove('hidden');
    questionsList.classList.add('hidden');
    nextQuestBtn.classList.add('hidden');
    prevQuestBtn.classList.add('hidden');
    counterQuestions.classList.add('hidden');

    nextQuestBtn.removeEventListener('click', findActiveQuest);
    prevQuestBtn.removeEventListener('click', findActiveQuest);

    answers.forEach(function(elem) {
        elem.removeEventListener('change', foundCheckedAnswers);
    })

    resultTestBtn.classList.add('hidden');
}

resultTestBtn.addEventListener('click', showResultTest);

