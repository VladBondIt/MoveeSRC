// Это не ошибка все ОК
@@include('alert.js')

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

const link = document.querySelectorAll('a')

link.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    })
});

const triggLeft = document.querySelector('.stats__left')
const changeFill = document.querySelector('.stats__svg_l')

triggLeft.onmouseenter = () => {
    changeFill.style.fill = "white";
};
triggLeft.onmouseleave = () => {
    changeFill.style.fill = "#5e80ff";
};

const triggRight = document.querySelector('.stats__right')
const changeStroke = document.querySelector('.stats__svg_r')

triggRight.onmouseenter = () => {
    changeStroke.style.stroke = "white";
};
triggRight.onmouseleave = () => {
    changeStroke.style.stroke = "#5e80ff";
};

$(document).ready(function () {
    // При КЛИКЕ на блок .block__title происходит функция ↓↓
    $('.help__title').click(function (event) {
        // Описание функции
        // Именно на нажамот загаловке .block__title добавляем переключатель-блок active
        // с помощью next мы добавляем анимацию слайда переключателся slideToggle со скоростью 300 мили секунд;
        $(this).toggleClass('active').next().toggleClass('active');
        // if ($()) {

        // }
        // // Если блок .block имеет блок-класс one тогда происходит функция ↓↓
        // if ($('.block').hasClass('one')) {
        //     // У все блоков .block__title кроме нажатого not(this) убираем класс active;
        //     $('.block__title').not($(this)).removeClass('active');
        //     // Скрываем все блоки с текстом .block__text при нажатии на следующий(not(this)(next)) .block__text
        //     // предыдущий сворачивается вверх со скоросью 300мс slideUp(300);
        //     $('.block__text').not($(this).next()).slideUp(300);
        // }
    });
});