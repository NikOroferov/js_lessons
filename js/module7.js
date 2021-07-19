// // Найти отдельный(первый найденный) элемент
// // Отсутствие совпадений - возвращает null
// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);


// // Найти список(коллекцию) элементов
// // Отсутствие совпадений - возвращает пустой массив
// // const navLinkEl = document.querySelectorAll('.site-nav__item');
// const navLinkEl = navEl.querySelectorAll('.site-nav__item');
// console.log('navLinkEl', navLinkEl);

// // Сделал кнопку


// const navEl = document.querySelector('.site-nav');
// const firstNavEl = navEl.firstElementChild;
// console.log(firstNavEl);


// // Создание элементов
// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'It is a title of page';
// console.log(titleEl);
// document.body.appendChild(titleEl)


// const imgEl = document.createElement('img');
// imgEl.src = 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png';
// imgEl.alt = 'image';
// imgEl.width = 300;
// console.log(imgEl);
// document.body.appendChild(imgEl)

// созд. и доб. нов. эл. в меню
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Yep it is a link';
navLinkEl.href = '/profile'

console.log(navItemEl);
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
