//  Toggle pages
const personTestsBtn = document.querySelector('.nav__btn_person-tests');
const chosenTestsBtn = document.querySelector('.nav__btn_chosen-tests');
const personBtn = document.querySelector('.header__user');
const personPage = document.querySelector('.person');
const personTestsPage = document.querySelector('.person-tests');
const chosenTestsPage = document.querySelector('.chosen-tests');
const footerSoc = document.querySelector('.footer-social');


let showPersonTests = function() {
    personPage.classList.add('hidden');
    chosenTestsPage.classList.add('hidden');
    
    personTestsPage.classList.remove('hidden');
    footerSoc.classList.remove('hidden');
};

let showPerson = function() {
    footerSoc.classList.add('hidden');
    personTestsPage.classList.add('hidden');
    chosenTestsPage.classList.add('hidden');
    
    personPage.classList.remove('hidden');
};

let showChosenTests = function() {
    footerSoc.classList.add('hidden');
    personTestsPage.classList.add('hidden');
    personPage.classList.add('hidden');
    
    chosenTestsPage.classList.remove('hidden');
};

personTestsBtn.addEventListener('click', showPersonTests);

chosenTestsBtn.addEventListener('click', showChosenTests);

personBtn.addEventListener('click', showPerson);

// Fetch on personPage
const redactUser = document.querySelector('.user__redaction');

let getResponseRedact = function(URL) {
    
    let response = fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(response => {
            if (response.ok) {
                response.json();
                window.location.href = 'URL страницы "в разработке"';
            }
        })
        .catch(error => console.log(error))
}

redactUser.addEventListener('click', (evt) => {
    evt.preventDefault();
    getResponseRedact('serverURL');
});

// Fetch on personTestsPage
const createTestBtn = document.querySelector('.person-tests__add');

let getResponseCreate = function(URL) {
    
    let response = fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(response => {
            if (response.ok) {
                response.json();
                window.location.href = 'URL страницы "в разработке"';
            }
        })
        .catch(error => console.log(error))
}

createTestBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    getResponseCreate('serverURL');
});

let redirectOnTest = document.querySelectorAll('.person-tests__logo');

let postResponseTest = function(URL, item) {
    let data = [];
    let testId = item.closest('.person-tests__item').dataset.test_id;
    data.push('test_id: ', testId);
    
    let response = fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
            response.json();
            window.location.href = 'URL страницы теста';
            }
        })
            .catch(error => console.log(error))
}

redirectOnTest.forEach((elem) => {
    elem.addEventListener('click', (evt) => {
        evt.preventDefault();
        postResponseTest('URLстраницыТеста', elem);
    });
});

let redirectOnRedactTest = document.querySelectorAll('.person-tests__redact');

let postResponseRedact = function(URL, item) {
    let data = [];
    let testId = item.closest('.person-tests__item').dataset.test_id;
    data.push('test_id: ', testId);
    
    let response = fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
            response.json();
            window.location.href = 'URL страницы РЕДАКТИРОВАНИЯ теста';
            }
        })
            .catch(error => console.log(error))
}

redirectOnRedactTest.forEach((elem) => {
    elem.addEventListener('click', (evt) => {
        evt.preventDefault();
        postResponseRedact('serverURL', elem);
    });
});

// Scroll+fetch on personTestsPage

let lastItem = personTestsPage.querySelector('.person-tests__item:last-child');


let postResponseScroll = function(URL, item) {
    let testId = item.dataset.test_id;
    let data = ['last_test_id: ', testId];

    let response = fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                personTestsPage.append(response.json());
                lastItem = personTestsPage.querySelector('.person-tests__item:last-child');  
            }
        })
            .catch(error => console.log(error))
}

personTestsPage.addEventListener('scroll', function() {
    let pageScroll = personTestsPage.scrollTop;
    let itemScroll = lastItem.clientHeight - 100;
    if (pageScroll > itemScroll) {
        postResponseScroll('someURL', lastItem);
    }
});

// Chosen-tests 

const searchTestBtn = document.querySelector('.chosen-tests__search');

let getResponseSearch = function(URL) {
    
    let response = fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(response => {
            if (response.ok) {
                response.json();
                window.location.href = 'URL страницы "в разработке"';
            }
        })
        .catch(error => console.log(error))
}

searchTestBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    getResponseSearch('serverURL');
});

const basketBtn = document.querySelector('.chosen-tests__basket');
const deleteBtn = document.querySelector('.chosen-tests__delete');

let activationBasket = function() {
    basketBtn.classList.toggle('active');
    deleteBtn.classList.toggle('visually-hidden');
}

basketBtn.addEventListener('click', () => {
    activationBasket();

    let checkingBasket = basketBtn.classList.contains('active');
    let chosenItems = chosenTestsPage.querySelectorAll('.chosen-tests__item');

    let choseElem = (el) => (ev) => {
        ev.preventDefault();
        el.classList.toggle('active');
    }

    let deleteElems = function() {
        chosenItems.forEach(function(item) {
            if (item.classList.contains('active')) {
                item.remove();
                // POST запрос
            }
        })
    }

    if (checkingBasket) {
        chosenItems.forEach(function(elem) {
            elem.addEventListener('click', choseElem(elem, event));
        });
        
        deleteBtn.addEventListener('click', deleteElems);

    } else {
        deleteBtn.removeEventListener('click', deleteElems);
        chosenItems.forEach(function(elem) {
            elem.classList.remove('active');
            
            elem.removeEventListener('click', choseElem(elem, event));
        }); 
    }
});