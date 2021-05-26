// [3]. Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// const audi = new Car();

// console.log(new Car('Audi', 'Q3', 36000));



// [4].

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));



// [5].Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function() {
//     return this.price;
// }

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }

// console.log(Car.prototype.hasOwnProperty('getPrice'));


// new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));



// [6]. С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
// Добавь методы на прототип:
// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// function Storage(items) {
//     this.items = items;
// };

// Storage.prototype.getItems = function () {
//     return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//     this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (removeItem) {
//     for (let i = 0; i < this.items.length; i++) {
//         if (this.items.indexOf(removeItem) === i) {
//             this.items.splice(i, 1)
//         };
//     };
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]



// [7]. С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.
// Добавь методы на прототип:
// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// function StringBuilder(baseValue) {
//     this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function () {
//     return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//     this.value = this.value + str;
// };

// StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//     this.value = str + this.value + str;
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='



// [9] 