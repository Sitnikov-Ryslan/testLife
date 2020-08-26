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

// Likes on personTestsPage

let likes = document.querySelectorAll('.like-btn');

let postData = function(URL, item, amount) {
    let data = {};
    data = item.closest('li').dataset.test_id;
    
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
    let quantity = elem.closest('.quantity');

    if (press) {
        postData('http://l91287uv.beget.tech/like/add', elem, quantity);
    } else {
        postData('http://l91287uv.beget.tech/like/delete', elem, quantity);
        let block = elem.closest('li');
        let blockId = block.dataset.test_id;
        let blockBro = chosenTestsPage.querySelector(`li[data-test_id="${blockId}"]`);
        
        if (blockBro !== null) {
            blockBro.remove();
        }
    }
})
})

// Скролла не будет
// Scroll+fetch on personTestsPage

// let lastItem = personTestsPage.querySelector('.person-tests__item:last-child');


// let postResponsePersonScroll = function(URL, item) {
//     let testId = item.dataset.test_id;
//     let data = ['last_test_id: ', testId];

//     let response = fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(response => {
//             if (response.ok) {
//                 personTestsPage.append(response.json());
//                 lastItem = personTestsPage.querySelector('.person-tests__item:last-child');  
//             }
//         })
//             .catch(error => console.log(error))
// }

// personTestsPage.addEventListener('scroll', function() {
//     let pageScroll = personTestsPage.scrollTop;
//     let itemScroll = lastItem.clientHeight - 100;
//     if (pageScroll > itemScroll) {
//         postResponsePersonScroll('someURL', lastItem);
//     }
// });

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

// let postResponseDelete = function(URL, elem) {
//     let data = [];
//     elemId = elem.dataset.test_id;
//     data.push('test_id: ', elemId);

//     let response = fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         mode: 'cors',
//         body: JSON.stringify(data)
//     })
//         .then(response => response.json())
//         .catch(error => console.log(error))
// }


// const basketBtn = document.querySelector('.chosen-tests__basket');
// const deleteBtn = document.querySelector('.chosen-tests__delete');

// let activationBasket = function() {
//     basketBtn.classList.toggle('active');
//     deleteBtn.classList.toggle('visually-hidden');
//     if (!basketBtn.classList.contains('active')) {
//         chosenTests.forEach(function(elem) {
//             elem.classList.remove('active');
//         });
//     };
// };

// basketBtn.addEventListener('click', () => {
//     activationBasket();
// });

// let deleteElems = function() {
//     chosenTests.forEach(function(item) {
//         if (item.classList.contains('active')) {   
//             postResponseDelete('http://l91287uv.beget.tech/like/delete', item);
//             item.remove();
//             // chosenTests = chosenTestsPage.querySelectorAll('.chosen-tests__item');
//             // Вроде надо навешать листнеров(и удалить старые)
//             // chosenTests.forEach(function(elem) {
//             //     elem.addEventListener('click', (evt) => {
//             //         if (basketBtn.classList.contains('active')) {
//             //             evt.preventDefault();
//             //             elem.classList.add('active');
//             //             deleteBtn.addEventListener('click', deleteElems);
//             //         } else {
//             //             postResponseChose('serverURL', elem);
//             //             deleteBtn.removeEventListener('click', deleteElems);
//             //         }
//             //     });
//             // });
//         }
//     })
// }

let chosenTests = chosenTestsPage.querySelectorAll('.chosen-tests__item');

let postResponseChose = function(URL, item) {
    let data = [];
    let testId = item.dataset.test_id;
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

chosenTests.forEach(function(elem) {
    elem.addEventListener('click', (evt) => {
        evt.preventDefault();
        postResponseChose('serverURL', elem);
    });
    // elem.addEventListener('click', (evt) => {
        // if (basketBtn.classList.contains('active')) {
        //     evt.preventDefault();
        //     elem.classList.add('active');
        //     deleteBtn.addEventListener('click', deleteElems);
        // } else {
        //     postResponseChose('serverURL', elem);
        //     deleteBtn.removeEventListener('click', deleteElems);
        // }
    // });
});

// Скролла не будет
// Scroll+fetch on chosenPage

// let lastChosen = chosenTestsPage.querySelector('.chosen-tests__item:last-child');

// let postResponseChosenScroll = function(URL, item) {
//     let testId = item.dataset.test_id;
//     let data = ['last_test_id: ', testId];

//     let response = fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(response => {
//             if (response.ok) {
//                 chosenTestsPage.append(response.json());
//                 chosenTests = chosenTestsPage.querySelectorAll('.chosen-tests__item');
//                 // Вроде как тоже надо новых листнеров
//                 // chosenTests.forEach(function(elem) {
//                 //     elem.addEventListener('click', (evt) => {
//                 //         if (basketBtn.classList.contains('active')) {
//                 //             evt.preventDefault();
//                 //             elem.classList.add('active');
//                 //             deleteBtn.addEventListener('click', deleteElems);
//                 //         } else {
//                 //             postResponseChose('serverURL', elem);
//                 //             deleteBtn.removeEventListener('click', deleteElems);
//                 //         }
//                 //     });
//                 // });

//                 lastChosen = chosenTestsPage.querySelector('.person-tests__item:last-child');  
//             }
//         })
//             .catch(error => console.log(error))
// }

// chosenTestsPage.addEventListener('scroll', function() {
//     let pageScroll = chosenTestsPage.scrollTop;
//     let itemScroll = lastChosen.clientHeight - 200;
    
//     if (pageScroll > itemScroll) {
//         postResponseScroll('someURL', lastItem);
//     }
// });