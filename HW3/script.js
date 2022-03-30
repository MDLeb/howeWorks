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
}
function task5(elem) {
}
function task6(elem) {
}
function task7(elem) {
}
