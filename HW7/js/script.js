class CoffeMachine {
    #waterAmount = 2;
    #waterLimit;
    #power;

    set waterAmount(value) {
        if (value < 0) throw new Error('Low water level');
        if (value > this.#waterLimit) throw new Error('Over the limit'); 
        this.#waterAmount = value;
    }

    get waterAmount() {
        return this.#waterAmount;
    }

    constructor(power, waterLimit) {
        this.#power = power;
        this.#waterLimit = waterLimit;
    }
    get waterLimit() {
        return this.#waterLimit;
    }
    get power() {
        return this.#power;
    }
    get timeToMakeCoffee() {
        return this.#waterAmount * 4200 / this.#power;
    }
    makeCoffe = function() {
        console.log('Wait...');
        setTimeout(() => {console.log('Coffee is made!')}, this.timeToMakeCoffee);
    }
}

let coffeMachine = new CoffeMachine(100, 10);
console.log(coffeMachine.power); 
console.log(coffeMachine.waterLimit);
coffeMachine.waterAmount = 5;
console.log(coffeMachine.waterAmount)
//coffeMachine.makeCoffe();
