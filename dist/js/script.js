// Это не ошибка все ОК


// Функция проверки возможности отображения WEBP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
// Links
// const link = document.querySelectorAll('a')

// link.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//     })
// });
// Hovers
// const triggLeft = document.querySelector('.stats__left')
// const changeFill = document.querySelector('.stats__svg_l')

// triggLeft.onmouseenter = () => {
//     changeFill.style.fill = "white";
// };
// triggLeft.onmouseleave = () => {
//     changeFill.style.fill = "#5e80ff";
// };

// const triggRight = document.querySelector('.stats__right')
// const changeStroke = document.querySelector('.stats__svg_r')

// triggRight.onmouseenter = () => {
//     changeStroke.style.stroke = "white";
// };
// triggRight.onmouseleave = () => {
//     changeStroke.style.stroke = "#5e80ff";
// };
// Spoilers
$(document).ready(function () {
    // При КЛИКЕ на блок .block__title происходит функция ↓↓
    $('.reviews__spoiler').click(function (event) {
        // Описание функции
        // Именно на нажамот загаловке .block__title добавляем переключатель-блок active
        // с помощью next мы добавляем анимацию слайда переключателся slideToggle со скоростью 300 мили секунд;
        $(this).prev().toggleClass('active');
        if ($(this).text() === 'Читать полностью') {
            $(this).text('Свернуть')
        } else if ($(this).text() === 'Свернуть') {
            $(this).text('Читать полностью')
        }
        // Если блок .block имеет блок-класс one тогда происходит функция ↓↓
        // Может открыться только 1 спойлер
        // if ($('.help__spoilers').hasClass('one')) {
        //     // У все блоков .block__title кроме нажатого not(this) убираем класс active;
        //     $('.help__title').not($(this)).removeClass('active').next().removeClass('active');
        // }
    });
});



// Burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.header__link').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// !!!TABS!!!

let tabs = document.querySelector('.carpark__tabs');
let btns = tabs.querySelectorAll('.carpark__tabs-item');
let items = tabs.querySelectorAll('.carpark__slider');

function change(arr, i) {
    arr.forEach(item => {
        item.forEach(i => { i.classList.remove('is-active') });
        item[i].classList.add('is-active');
    })
};

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        change([btns, items], i);
    });
};

// Slider
$(document).ready(function () {
    $('.carpark__slider').slick({
        speed: 800,
        touchThreshold: 20,
        centerMode: true,
        slideToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                }
            },
        ]
    });
    $('.carpark__slider').slick('setPosition');
});


const popUp = document.querySelector('.popup'),
    popInner = document.querySelector('.popup__content'),
    popBtns = document.querySelectorAll('#pop-trigg'),
    closeBtns = document.querySelectorAll('.close-popup');


function openPopup() {
    popUp.classList.add('open');
    popInner.classList.add('open');
}
function closePopup() {
    popUp.classList.remove('open');
    popInner.classList.remove('open');
}

closeBtns.forEach(closeBtnItem => {
    closeBtnItem.addEventListener('click', closePopup);
});

for (let i = 0; i < popBtns.length; i++) {
    popBtns[i].addEventListener('click', (e) => {
        e.preventDefault();
        openPopup();
    })
}