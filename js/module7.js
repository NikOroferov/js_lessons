// Найти отдельный(первый найденный) элемент
// Отсутствие совпадений - возвращает null
const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);


// Найти список(коллекцию) элементов
// Отсутствие совпадений - возвращает пустой массив
// const navLinkEl = document.querySelectorAll('.site-nav__item');
const navLinkEl = navEl.querySelectorAll('.site-nav__item');
console.log('navLinkEl', navLinkEl);

// Сделал кнопку)
const magicBtn = document.querySelector('.button');
magicBtn.addEventListener('click', () => {
    const navLinkEl = navEl.querySelectorAll('.site-nav__item');
    console.log('navLinkEl', navLinkEl);
})

