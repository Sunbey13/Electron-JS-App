//создаем переменную, в которую кладем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//переменная, в которую кладем меню
let menu = document.querySelector('.sidebar');
let menuIcon = document.querySelector('#menu-icon');
//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    //отменяем стандартное поведение ссылки
    event.preventDefault();
    //вешаем класс на меню, когда кликнули по кнопке
    menu.classList.toggle('visible');
    menuIcon.classList.toggle('icon-active')
})