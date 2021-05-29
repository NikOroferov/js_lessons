// function constructor 
// (в ней нельзя создавать методы)

function BMW(color = 'white') {
    this.engine = 'V6';
    this.price = 10000;
    this.color = color;

    // ТАК ДЕЛАТЬ НЕЛЬЗЯ
    this.acceleration = function () {
        console.log('7sec');
    };

    console.log('BMW');
};

// Чтобы добавлять методы объектам, которые созданы из этой функции конструктора, записываем эти методы в её свойство [prototype]

console.log(BMW.prototype);

BMW.prototype.getStart = function () {
    console.log('наследуемый метод');
};

BMW.prototype.getStop = function () {
    console.log('наследуемый метод');
};

const myCar1 = new BMW('red');
console.log(myCar1);

const myCar2 = new BMW();
console.log(myCar2);









