// const array = [8, 19, 67, 5, 894, 61, 62, 90, 33, 18, 24];

// const reduce = array.reduce((total, elem) => {
//     console.log("total", total, "elem", elem);
//     total.push(elem + "");
//     return total;
// }, []);

// console.log(reduce);



// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false

function isObjectEmpty(obj) {
    if (Object.keys(obj).length === 0) return false;
    return true;
}

const isObjEmpty = (obj) => Object.keys(obj).length === 0 ? false : true;

const obj1 = {};
const obj2 = { name: 'user', age: 21 };

const { name, age } = obj2

console.log(isObjEmpty(obj1));
console.log(isObjEmpty({ name, age }));


