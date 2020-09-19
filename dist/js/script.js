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