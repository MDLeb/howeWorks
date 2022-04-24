let Cat = function(_name = 'Cat', _age = 0) {
    let name = _name;
    let age = _age;
    let isAlive = true;

    let hungry = 10;
    let wc = 0;
    let energy = 100;

    let isSleeping = false;
    let isEating = false;
    let isClean = true;

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
        if(_name) name = _name;
    }

    this.toSleep = () => {
        clearInterval(int2);
        if(energy < 100)
        {
            isSleeping = true;
            setTimeout(() => {
            energy++;
             if(energy%2 == 0)
                 document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/sleep1.png")');
            else
                 document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/sleep2.png")');
            document.querySelector('.energy').style.setProperty('--energy', `${energy}%`);
            this.toSleep()
        }, 500);
        }
        else {
            document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/cat.png")');
            clearInterval(int1, int3);
            isSleeping = false;
            this.checkControls();
            this.live();
        }
    }
    let int4;
    this.toPee = (i = 0, stop = false) => {
        int4 = setTimeout(() => {
            isClean = false;
            this.checkControls();
            if(i == 1){
                document.querySelector('.cat_poo').style.setProperty('--bg-poo', 'url("source/catPoo1.png")');
                i--;
            }else{
                document.querySelector('.cat_poo').style.setProperty('--bg-poo', 'url("source/catPoo2.png")');
                i++;
            }
            this.toPee(i);

        }, 500);
    }
    this.toClean = () => {
        document.querySelector('.cat_poo').style.setProperty('--bg-poo', '');
        isClean = true;
        this.checkControls();
        clearTimeout(int4);
    }

    this.toEat = () => {
        clearInterval(int1);
        if(hungry > 10){
            isEating = true;
            setTimeout(() => {
                hungry--;
                if(hungry%2 == 0)
                    document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/eat1.png")');
                else
                    document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/eat2.png")');
                document.querySelector('.hungry').style.setProperty('--hungry', `${hungry}%`);
                this.toEat();
            }, 500);
        }else{
            document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/cat.png")');
            clearInterval(int2, int3);
            isEating = false;
            this.checkControls();
            this.live();
        }
    }

    this.checkControls = () => {
        if(isEating || isSleeping)
            document.querySelector('button.eat').setAttribute('disabled', '');
        else document.querySelector('button.eat').removeAttribute('disabled');

        if(isSleeping || isEating)
            document.querySelector('button.sleep').setAttribute('disabled', '');
        else document.querySelector('button.sleep').removeAttribute('disabled');

        if(isClean)
            document.querySelector('button.clean').setAttribute('disabled', '');
        else document.querySelector('button.clean').removeAttribute('disabled');
    }
    let int1, int2, int3;// 1 - hungry 2 - energy 3 - poo
    this.live = () => {

        int1 = setInterval(() => {
            
            if(hungry == 100) {
                clearInterval(int1);
                clearInterval(int2);
            }else hungry++;
            document.querySelector('.hungry').style.setProperty('--hungry', `${hungry}%`);
        }, 200);
        int2 = setInterval(() => {
            energy--;
            if(energy == 0) {
                clearInterval(int1, int2);
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

const Eat = () => {
    myCat.toEat();
    myCat.checkControls();
}
const Sleep = () => {
    myCat.toSleep();
    myCat.checkControls();

}
const Clean = () => {
    myCat.toClean();
    myCat.checkControls();

}
let myCat = new Cat();

const main = () => {
    myCat.setName(prompt('Enter cat`s name'));
    myCat.setAge(prompt('Enter cat`s age'));

    document.querySelector('.cat__info_name').innerText = `Name: ${myCat.getName()}`;
    document.querySelector('.cat__info_age').innerText = `Age: ${myCat.getAge()}`;

    document.querySelector('.cat').style.setProperty('--bg-image', 'url("source/cat.png")');

    myCat.live();
}

main();

