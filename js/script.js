//  Fetch

let closeBtn = document.querySelector('.development__close');
let userPage = document.querySelector('.header__user');

let getResponse = function(URL) {
    
    let response = fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(response => {
            if (response.ok) {
                response.json()
            }
        })
        .catch(error => console.log(error))
}

userPage.addEventListener('click', (evt) => {
    evt.preventDefault();
    getResponse('someURL');
});

closeBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    getResponse('someURL');
});