// Redactor begin

const redactorBeginBtn = document.querySelector('.redactor-content__begin');
const redactorInfo = document.querySelector('.redactor-content__info');
const redactorQuestion = document.querySelector('.redactor-content__question');
const redactorSubmitBtn = document.querySelector('.redactor-content__submit');
const redactorBackBtn = document.querySelector('.redactor-content__question-back');

redactorBeginBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    redactorInfo.classList.add('hidden');
    redactorQuestion.classList.remove('hidden');
    redactorSubmitBtn.classList.remove('hidden');
    redactorBeginBtn.classList.add('hidden');
});

redactorBackBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    redactorInfo.classList.remove('hidden');
    redactorQuestion.classList.add('hidden');
    redactorSubmitBtn.classList.add('hidden');
    redactorBeginBtn.classList.remove('hidden');
});

let addAnswerBtn = redactorQuestion.querySelector('.answer-list__item-add');

addAnswerBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let prevBlock = redactorQuestion.querySelector('.answer-list__item:nth-last-child(2)');
    let lastName = prevBlock.querySelector('.answer-list__input').name;
    let newName = Number(lastName) + 1;
    let parent = addAnswerBtn.closest('.answer-list__item');

    parent.insertAdjacentHTML('beforebegin', `<li class="answer-list__item">
    <label>
        <input class="answer-list__radio" name="question1" type="radio">
        <input class="answer-list__input" name="${newName}" type="text" placeholder="Ответ" minlength="5" maxlength="50">
        <span></span>
    </label>
</li>`);
})