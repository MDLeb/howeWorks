function addArea(e) {
   if(e.target.tagName == 'BUTTON'){//если нажать на кнопку
        e.target.parentNode.classList.toggle("active");
        e.target.classList.toggle("active");
   }else{ //если нажать на стрелку
        e.target.parentNode.parentNode.classList.toggle("active");
        e.target.parentNode.classList.toggle("active");
   }
}
let clearDisplay = (elem) => {
    let children = Array.from(elem.parentNode.querySelector(".display").childNodes);
    children.forEach(child => {
        child.remove();
    });
} 
let arr = []; //для 8

function task1(elem) {
    let a1, a2, b1, b2;
    let writeNumbers = () => {
        a1 = elem.parentNode.querySelector(".task").querySelector("#start1").value;
        a2 =  elem.parentNode.querySelector(".task").querySelector("#end1").value;
        b1 = elem.parentNode.querySelector(".task").querySelector("#start2").value;
        b2 = elem.parentNode.querySelector(".task").querySelector("#end2").value;
        if (a1 <= a2 && b1 <= b2) {
            for(let i = a1; i <= a2; i++) {
                let num = document.createElement('span');
                num.style.display = 'inline-block';
                num.style.width = '40px';
                num.innerText = i;
                elem.parentNode.querySelector(".task").querySelector(".display").append(num);
            }
            for(let i = b1; i <= b2; i++) {
                let num = document.createElement('span');
                num.style.display = 'inline-block';
                num.style.width = '40px';
                num.innerText = i;
                elem.parentNode.querySelector(".task").querySelector(".display").append(num);
            }
        }else{ //немножко не работает
            console.log(123);
            elem.parentNode.querySelector(".task").querySelector(".display").innerText = "Некорректные данные!";
            }  
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);
}
function task2(elem) {
    let a, b;
    let writeNumbers = () => {
        a = elem.parentNode.querySelector(".task").querySelector("#start1").value;
        b =  elem.parentNode.querySelector(".task").querySelector("#end1").value;
        console.log(a, b);
        if (a <= b) {
            for(let i = a; i <= b; i++) {
                let num = document.createElement('span');
                num.style.display = 'block';
                num.style.width = '40px';
                num.style.margin = '0px auto';
                num.innerText = i;
                elem.parentNode.querySelector(".task").querySelector(".display").append(num);
            }
        }else{ 
            elem.parentNode.querySelector(".task").querySelector(".display").innerText = "Некорректные данные!";
            }  
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);

}
function task3(elem) {
    let a, b;
    let writeNumbers = () => {
        a = elem.parentNode.querySelector(".task").querySelector("#start1").value;
        b =  elem.parentNode.querySelector(".task").querySelector("#end1").value;
        if (a <= b) {
            let sum = 0;
            let num = document.createElement('span');
            num.style.display = 'inline-block';
            num.style.width = '40px';
            for(let i = a; i <= b; i++) {
                sum += +i;
               
            }
            num.innerText = sum;
            elem.parentNode.querySelector(".task").querySelector(".display").append(num);
        }else{ //немножко не работает
            elem.parentNode.querySelector(".task").querySelector(".display").innerText = "Некорректные данные!";
            }  
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);
}
function task4(elem) {
    let a, b;
    let writeNumbers = () => {
        a = elem.parentNode.querySelector(".task").querySelector("#start1").value;
        b =  elem.parentNode.querySelector(".task").querySelector("#end1").value;
        if (+a <= +b) {
            for(let i = a; i <= b; i++) {
                let sum = 0;
                for(let j = 0; j <= i; j++) {
                    sum += j;
                }
                let num = document.createElement('span');
                num.style.display = 'inline-block';
                num.style.width = '40px';
                num.innerText = sum;
                elem.parentNode.querySelector(".task").querySelector(".display").append(num);
            }
            
        }
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);

}
function task5(elem) {
    let a, b;
    let writeNumbers = () => {
        a = +elem.parentNode.querySelector(".task").querySelector("#start1").value;
        b =  +elem.parentNode.querySelector(".task").querySelector("#end1").value;
        if (a <= b) {
            for(let i = a; i <= b; i++) {
                if(i % 2 == 0) {
                    let num = document.createElement('span');
                    num.style.display = 'inline-block';
                    num.style.width = '40px';
                    num.innerText = i;
                    elem.parentNode.querySelector(".task").querySelector(".display").append(num);
                }
            }
        }
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);
}
function task5_2(elem) {
    let a, b;
    let writeNumbers = () => {
        a = +elem.parentNode.querySelector(".task").querySelector("#start1").value;
        b =  +elem.parentNode.querySelector(".task").querySelector("#end1").value;
        if (a <= b) {
            let i = a;
            while(i <= b) {
                if(i % 2 == 0) {
                    let num = document.createElement('span');
                    num.style.display = 'inline-block';
                    num.style.width = '40px';
                    num.innerText = i;
                    elem.parentNode.querySelector(".task").querySelector(".display").append(num);
                }
                i++;        
            }
        }
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);
}
function task6(elem) {
    if(elem.parentNode.querySelector(".task").querySelector(".display").innerText) return;
    
    for(let i = 1; i <= 10; i++) {
        let block = document.createElement('div');
        block.style.display = 'inline-block';
        block.style.width = '9%';
        block.style.border = '1px solid green';
        for(let j = 1; j <= 10; j++) {
            let str = `${i} * ${j} = ${i*j}`;
            let num = document.createElement('span');
            num.style.display = 'block';
            num.style.textAlign = 'left';
            num.innerText = str;
            block.append(num);
        }
        elem.parentNode.querySelector(".task").querySelector(".display").append(block);
    }
}
function task7(elem) {
    let a;

    let writeNumbers = () => {
        a = +elem.parentNode.querySelector(".task").querySelector(".number").value;
        if (a <= 50) {
            let str = document.createElement('span');
            str.innerText = `Введите число более 50`;
            elem.parentNode.querySelector(".task").querySelector(".display").append(str);
            return;
        }
        let i = 0;
        while(a > 50) {
            a = a/2;
            i++;
        }
        let num = document.createElement('span');
        num.style.display = 'block';
        num.innerText = `Результат деления: ${a}, количество операций: ${i}`;
        elem.parentNode.querySelector(".task").querySelector(".display").append(num);
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);
}

function task8(elem) {
    let writeNumbers = () => {
        a = +elem.parentNode.querySelector(".task").querySelector(".number").value;
        if(!a && a !== 0 && a !== '') {
            let message = document.createElement('span');
            message.style.display = 'block';
            message.innerText = "Вы ввели не число!"
            elem.parentNode.querySelector(".task").querySelector(".display").append(message);
        }else if(a) {
            arr.push(a);
        }else {
            let sum = 0, result;
            for(let i = 0; i < arr.length; i++){
                sum += arr[i];
            }
            result = sum/arr.length;
            let message = document.createElement('span');
            message.style.display = 'block';
            message.innerText = `Сумма введенных чисел равна ${sum}, среднее арифметическое равно ${result}`
            elem.parentNode.querySelector(".task").querySelector(".display").append(message);
            arr.length = 0;
        }
    elem.parentNode.querySelector(".task").querySelector(".number").value = null;
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);
}

function task9(elem) {
    let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
    let writeNumbers = () => {
        let arrNum = str.split(' ');
        let min = +arrNum[0], max = +arrNum[0];
        arrNum.forEach(num => {
            if(+num > max) max = +num;
            if(+num < min) min = +num;
        });
        let message = document.createElement('span');
        message.style.display = 'block';
        message.innerText = `Максимальное число: ${max}, минимальное число: ${min}`;
        elem.parentNode.querySelector(".task").querySelector(".display").append(message);
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);
}
function task10(elem) {
    let a;
    let aReverse = '';
    let writeNumbers = () => {
        a = elem.parentNode.querySelector(".task").querySelector(".number").value;
        if(+a) {
            let arr1 = a.split('');
            let sum = 0;
            arr1.forEach(
                num => {
                    sum += +num;
                    aReverse = `${num}`+ aReverse;
                }
            );            
            let message = document.createElement('span');
            message.style.display = 'block';
            message.innerText = `Число ${a}: цифр в числе ${arr1.length}; сумма = ${sum}; обратный порядок ${aReverse}.`;
            elem.parentNode.querySelector(".task").querySelector(".display").append(message);   
            aReverse = ''; 
        }
    }
    elem.parentNode.querySelector(".task").querySelector(".write").addEventListener('click', writeNumbers);
}