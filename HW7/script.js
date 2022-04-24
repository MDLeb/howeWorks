let Cat = function(_name = 'Cat', _age = 0) {
    let name = _name;
    let age = _age;
    let isAlive = true;

    let hungry = 10;
    let wc = 0;
    let energy = 100;

    let isSleeping = false;
    let isEating = false;

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
    let int4;
    this.toPee = (i = 0, stop = false) => {
        int4 = setTimeout(() => {
            
            if(i == 1){
                document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/poo1.png")');
                i--;
            }else{
                document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/poo2.png")');
                i++;
            }
            this.toPee(i);

        }, 500);
    }
    this.toClean = () => {
        document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/cat.png")');
        clearTimeout(int4);
    }

    this.toEat = () => {
        clearInterval(int1);
        if(hungry > 10 && hungry < 100)
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

    let int1, int2, int3;// 1 - hungry 2 - energy 3 - poo
    this.live = () => {
        int1 = setInterval(() => {
            hungry++;
            if(hungry > 100) {
                clearInterval(int1);
                clearInterval(int2);
               // isAlive = false;
               // return;
            }
            document.querySelector('.hungry').style.setProperty('--hungry', `${hungry}%`);
        }, 200);
        int2 = setInterval(() => {
            energy--;
            if(energy == 0) {
                clearInterval(int1, int2);
                //isAlive = false;
                //return;
            }
            document.querySelector('.energy').style.setProperty('--energy', `${energy}%`);
        }, 1000);
        int3 = setInterval(() => {
            if(wc == 100) {
                this.toPee();
                wc = 0;
            }
            else {
                wc++;
                document.querySelector('.wc').style.setProperty('--wc', `${wc}%`);
            }
        }, 200);
    }
}

let myCat = new Cat("Barsik", 2);

const Eat = () => {
    myCat.toEat();
}
const Sleep = () => {
    myCat.toSleep();
}
const Clean = () => {
    myCat.toClean();
}
console.log(myCat.getAge(), myCat.getName());

document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/cat.png")');

myCat.live();

