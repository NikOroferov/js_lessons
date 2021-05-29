class BMW {
    constructor (color = 'white') {
        this.engine = 'V6';
        this.price = 10000;
        this.color = color;
    }
    getStart() {
        console.log('start');
    };
    getStop() {
        console.log('stop');
    };
}

const myCar = new BMW('yellow')
console.log(myCar);