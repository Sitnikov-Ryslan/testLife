// Swiper

    let mySwiper = new Swiper('.swiper-container', {
        
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 1,
        autoHeight: true,
    
        navigation: {
            nextEl: elem.parentNode.querySelector('.swiper-button-next'),
            prevEl: elem.parentNode.querySelector('.swiper-button-prev'),
          },
    })