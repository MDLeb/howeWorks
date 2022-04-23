let Cat = function(_name = 'Cat', _age = 0) {
    let name = _name;
    let age = _age;
    let isAlive = true;

    let hungry = 50;
    let wc = 0;
    let energy = 50;

    this.getAge = () => {
        return age;
    }

    this.setAge = (_age) => {
        if(isNaN (_age) || _age < 0 || _age > 100) return;
        age = Math.round(_age);
    }

    this.getName = () => {
        return name;
    }

    this.setName = (_name) => {
        name = _name;
    }

    this.toSleep = () => {
        clearInterval(int2);
        if(energy < 100)
        setTimeout(() => {
            energy++;
             if(energy%2 == 0)
                 document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/sleep1.png")');
            else
                 document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/sleep2.png")');
            document.querySelector('.energy').style.setProperty('--energy', `${energy}%`);
            this.toSleep()
        }, 500);
        else {
            document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/cat.png")');
            clearInterval(int1);
            this.live();
        }
    }

    this.toPee = () => {

    }

    this.toEat = () => {
        clearInterval(int1);
        if(hungry > 10)
        setTimeout(() => {
            hungry--;
             if(hungry%2 == 0)
                 document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/eat1.png")');
            else
                 document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/eat2.png")');
            document.querySelector('.hungry').style.setProperty('--hungry', `${hungry}%`);
            this.toEat()
        }, 500);
        else {
            document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/cat.png")');
            clearInterval(int2);
            this.live();
        }
    }

    let int1, int2;
    this.live = (ating = false, sleeping = false) => {
        int1 = setInterval(() => {
            hungry++;
            if(hungry == 101) {
            clearInterval(int1);
            clearInterval(int2);
            isAlive = false;
            return;
        }
            document.querySelector('.hungry').style.setProperty('--hungry', `${hungry}%`);
        }, 200);
        int2 = setInterval(() => {
            energy--;
            if(energy == 0) {
            clearInterval(int1, int2);
            isAlive = false;
            return;
        }
            document.querySelector('.energy').style.setProperty('--energy', `${energy}%`);
        }, 1000);
        
        
    }


}

let myCat = new Cat("Barsik", 2);

const Eat = () => {
    myCat.toEat();
}
const Sleep = () => {
    myCat.toSleep();
}
console.log(myCat.getAge(), myCat.getName());
document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/cat.png")');

myCat.live();

