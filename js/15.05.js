// // Уважаемый имэйл, ваш ответ со скором принят. В случае, если он 16 и более, если меньше - не принят. Пересдайте тест
// // Если принят, добавить свойство "сдано" = true, до 16 = false 
// const answers = [
//     { email: 'a@gmail.com', score: 11 },
//     { email: 'b@gmail.com', score: 13 },
//     { email: 'c@gmail.com', score: 19 },
//     { email: 'd@gmail.com', score: 12 },
//     { email: 'e@gmail.com', score: 18 },
// ]

// function checkResult(arr) {
//     let message = '';
//     for (const answer of arr) {
//         if (answer.score >= 16) {
//             message = `Уважаемый ${answer.email}, Ваш ответ с баллом ${answer.score} принят.`
//             answer.isDone = true;
//         } else {
//             message = `Уважаемый ${answer.email}, Ваш ответ с баллом ${answer.score} не принят. Пересдайте тест`
//             answer.isDone = false;
//         }
//         console.log(message);
//     };
// };
// checkResult(answers);

// class GetForm{
//     constructor(email, ...rest) {
//         this.email = email;
//         this.result = rest;
//         this.score = 0;
//     }

//     getScore() {
//         let total = 0;
//         for (const number of this.result) {
//             total += number;
//         }
//         this.score = total;
//     }
// }

// const form1 = new GetForm('some@gmail.com', 3, 4, 5, 6, 7);
// // console.log(form1);
// form1.getScore();
// console.log(form1);

// const getData = () => {
//     console.log('Вы нажали на кнопку');
//     const x = new GetForm('some@gmail.com', 3, 4, 5, 6, 7)
//     console.log(x);
//     x.getScore()
//     answers.push(x)
//     console.log(answers);
//     checkResult(answers);
// }

// const btn = document.querySelector('.button');
// btn.addEventListener('click', getData);



// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]



// const dish = {
//     name: 'Цезарь',
//     products: ['курица', 'сыр', 'салат'],
    
//     updateProduct(product, newProduct) {
//         for (let i = 0; i < this.products.length; i++){
//             if (product === this.products[i]) {
//                 this.products.splice(i, 1, newProduct);
//             };
//         };
//     },

//     addProduct(...newProduct) {
//         console.log(newProduct);
//         this.products.push(...newProduct);
//     },

//     removeProduct(product) {
//         for (let i = 0; i < this.products.length; i++){
//             if (product === this.products[i]) {
//                 this.products.splice(i, 1);
//             };
//         };
//     }
// }

// console.log(dish);
// dish.updateProduct('курица', 'лосось')
// dish.addProduct('помидор');
// dish.removeProduct('помидор');

// const dish2 = {
//     name: 'Georgian',
//     products:[],
// }

// dish.addProduct.call(dish2, 'tomato', 'nuts');
// console.log(dish2);

// const y = ['tomato', 'cherry'];
// const z = ['nuts', 'cucumber'];
// // dish.updateProduct.call(dish2, ...y);
// dish.updateProduct.apply(dish2, z);
// console.log(dish2);



// const newObject = {
//     title: 'new',
//     count: '20',
//     total: '50',

//     getTitle() {
//         return this.title;
//     },
// };

// console.log(newObject.getTitle());

const napoleon = {
    _lairs: 7,
    _cream: 'zavarnoy',

    get lairs() {
    },
    set lairs(value) {
    },        
}
console.log(napoleon);

class Napoleon {
    constructor(lairs, cream){
        this._lairs = lairs;
        this._cream = cream;
    };
    get lairs() {
        return this._lairs;
    };
    set lairs(value) {
        return this._lairs = value;
    };
};

const newNapoleon = new Napoleon(10, 'smetanniy')
console.log(newNapoleon);

const newNapoleon2 = new Napoleon(15, 'medoviy')
console.log(newNapoleon2);

// Получаем значение свойства напрямую и через геттер
console.log(newNapoleon._lairs);
console.log(newNapoleon2.lairs);

// Изменяем значение свойства напрямую и через сеттер
console.log(newNapoleon._lairs = 5);
console.log(newNapoleon2.lairs = 7);

