
const array = [1, 2, 3, 4, 5];
// console.log(array);

// const mapArray = array.map((element, index, array) => {
//     console.log(element);
//     return element + 1;
// });
// console.log(mapArray);
// console.log(mapArray === array);

// const filterArray = array.filter((element, index, array) => {
//     return element > 2;
// });
// console.log(filterArray);

// const findArray = array.find((element, index, array) => {
//     return element > 2;
// });
// console.log(findArray);

// const forEachArray = array.forEach((element, index, array) => {
//     return element;
// });
// console.log(forEachArray);

// const reduceArray = array.reduce((acc, elem) => {
//     console.log(acc, elem);
//     acc = acc + elem;
//     return acc;
//     // console.log(acc, elem);
// }, 0);
// console.log(reduceArray);

// const reduceArray2 = array.reduce((acc, elem) => acc += elem, 0);
// console.log(reduceArray2);

// const reduceArray1 = array.reduce((totalArray, elem) => {
//     console.log(totalArray, elem);
//     totalArray.push(elem);
//     return totalArray;
//     // console.log(acc, elem);
// }, []);
// console.log(reduceArray1);

// const filterArray1 = array.filter(element => element > 2);
// console.log(filterArray1);

// const findArray1 = array.find(element => element > 2);
// console.log(findArray1);

const students = [
    {
        name: "Maxim",
        gendere: 'male',
        age: 16,
    },
    {
        name: 'Zlata',
        gendere: 'female',
        age: 32,
    },
    {
        name: 'Vadim',
        gendere: 'male',
        age: 17,
    },
];

const studentsName = students.map(student => student.name);
console.log(studentsName);

const studentsGendere = students.map(student => student.gendere);
console.log(studentsGendere);

const studentsAge = students.map(student => student.age);
console.log(studentsAge);

const age = students.filter(item => item.age > 16).map(item => item.name)
console.log(age);

const girls = students.filter(item => item.gendere === 'female')
console.log(girls);

const boys = students.filter(item => item.gendere === 'male')
console.log(boys);

const averageAge = students.reduce((total, student) => {
    total += student.age;
    return total;
}, 0) / students.length;
console.log(averageAge);

const averageAge1 = students.reduce((total, student, idx, arr) => {
    total += student.age / arr.length;
    return total
}, 0);
console.log(averageAge1);




// [[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]

const fruit = ['watermelon', 'peach', 'strawberry', 'grape'];

class IceCream {
    constructor(fruit, price = 20){
        this.name = `${fruit} - ice`
        this.price = price;
    }
}

const iceCreams = [];
fruit.forEach(item => iceCreams.push(new IceCream(item)));

console.table(iceCreams);


const fruitObj = [
    {productName: 'watermelon', price: 15},
    {productName: 'peach', price: 30},   
    {productName: 'strawberry', price: 20},   
    {productName: 'grape', price: 25}
];

const iceCreams2 = [];

fruitObj.forEach(item => {
    const { productName: name, price } = item;
    iceCreams2.push(new IceCream(name, price));
});

console.table(iceCreams2);


