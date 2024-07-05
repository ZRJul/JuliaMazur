
let toggle = document.getElementById('toggle');
let box = document.getElementById('menu');
let menuLinks = document.querySelectorAll('#menu a');
let toggleCheckbox = toggle.querySelector('input[type="checkbox"]');

toggle.addEventListener('click', function() {
    box.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        box.classList.remove('active');
        toggleCheckbox.checked = false; // Сбрасываем состояние чекбокса
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.icon_swiper_wrapper');
    const slides = document.querySelectorAll('.icon_swiper_slide');
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        swiperWrapper.appendChild(clone);
    });

    let swiper = new Swiper('.icon_swiper', {
        loop: true,
        freeMode: true,
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 2000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints:{
            320:{
                slidesPerView: 2,
            },
            480:{
                slidesPerView: 3,
            },
            992:{
                slidesPerView: 6,
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.ticker_swiper_wrapper');
    const slides = document.querySelectorAll('.ticker_swiper_slide');
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        swiperWrapper.appendChild(clone);
    });

    let swiper = new Swiper('.ticker_swiper', {
        loop: true,
        freeMode: true,
        slidesPerView: 7,
        spaceBetween: 30,
        speed: 2000,
        loopAdditionalSlides: 7,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints:{
            320:{
                slidesPerView: 2,
            },
            480:{
                slidesPerView: 4,
            },
            992:{
                slidesPerView: 7,
            }
        },
        on: {
            init: function () {
                this.autoplay.start();
            },
            transitionEnd: function() {
                this.wrapperEl.style.transitionTimingFunction = 'linear';
            }
        }
    });
});