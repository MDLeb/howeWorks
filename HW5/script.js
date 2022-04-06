function func1 (a, b, c) {
    let result = (a - b) / c;
    console.log(result);
}

function func2 (a) {
    let res1 = Math.pow(a, 2);
    let res2 = Math.pow(a, 3);
    console.log('Квадрат числа = ', res1, 'Куб числа = ', res2)
}
function func3_Max (a, b) {
    if(a >= b) return a;
    else return b;
}
function func3_Min (a, b) {
    if(a <= b) return a;
    else return b;
}
function func4_SetArray () {
    let a = +prompt('Введите первое число');
    let b = +prompt('Введите второе число');
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}
function func4_ShowArray () {
    let arr = func4_SetArray();
    console.log(arr);
}
function func5_IsEven (number) {
    if(number % 2 !== 0) return false
    else return true;
}
function func6 (arr) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(func5_IsEven(arr[i])) arr2.push(arr[i]);
    }
    return arr2;
}
function func7 (n, symb) {
    for(let i = 1; i <= n; i++){
        let str = '';
        for(let j = 0; j < i; j++) {
           symb ?  str += `${symb}` : str += `${i}`;
        }
        console.log(str);
    }
}
function func8 () {
    let h = +prompt('Введите высоту треугольника');
    for (let i = 0; i < h; i++) {
        let str = '';
        for (let j = 0; j < h*2+1; j++) {
            if(j == h+i || j == h-i || (j < h+i && j > h-i)) str += '^';
            else str += ' ';
        }
        console.log(str);
    }
}
function func8_reverse () {
    let h = +prompt('Введите высоту треугольника');
    for (let i = h; i >= 0; i--) {
        let str = '';
        for (let j = h*2; j >= 0; j--) {
            if(j == h+i || j == h-i || (j < h+i && j > h-i)) str += '*';
            else str += ' ';
        }
        console.log(str);
    }
}

function func9_Fibon () {
    let arr = [];
    let num1 = 0;
    let num2 = 1;
    arr.push(num1);
    arr.push(num2);
    let current;
    while (true) {
        current = num1 + num2;
        if (current > 1000) break;
        num1 = num2;
        num2 = current;
        arr.push(current);
    }
    console.log(arr);

}
function func9_Fibon_2 () {
    let arr = [];
    let num1 = 0;
    let num2 = 1;
    arr.push(num1);
    arr.push(num2);
    let current = 0;
    function addNum() {
        current = num1 + num2;
        if(current <= 1000){
            arr.push(current);
            num1 = num2;
            num2 = current;
            addNum();
        }
    }
    addNum();
    console.log(arr);
}

function func10 (n) { 
    if(n > 10){
        arr = Array.from(String(n));
        let a = 0;
        arr.forEach(element => {
            a += +element;
        });
        if(a < 10) console.log(a);
        else func10(a);
    };
}
function func11(arr) {
    console.log(arr.shift());
    if(arr.length >= 1) func11 (arr)
}
function func12() {
    let name = prompt('Введите ФИО');
    let group = prompt('Введите номер группы');
    let str1 = `Домашняя работа: «Функции»`;
    let str2 = `Выполнил: студент гр. ${group}`;
    let str3 = `${name}`;
    let border = '';
    let maxLength = 0;
    let message = [str1, str2, str3];
    message.forEach(elem => {
            if(elem.length > maxLength) maxLength = elem.length + 5;
        });

    for(let i = 0; i < maxLength; i++){
        border += '*';
    }
    console.log(border);
    message.forEach(elem => {
        elem = '* ' + elem;
        if(elem.length <= maxLength) {
            for(let i = elem.length; i < maxLength - 1; i++){
                elem = elem + ' ';
            }
        }
        elem += '*';
        console.log(elem);
    }); 
    console.log(border);    
}

function func12() {
    let email = prompt('Введите адрес почты');
    let flag = true;
    function errorMess(mes) {
        flag = false;
        console.log(`Некорректный ввод: ${mes}`);
    }  
    //проверка на содержание русских букв и недопустимых символов
    let availableChars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let availableCharsSpec = ['-', '_', '.', '@'];
    
    Array.from(email).forEach(char =>{
        if(!availableChars.includes(char) && !availableCharsSpec.includes(char)) errorMess('недопустимые символы');
    });
    // проверка на наличие @
    if(email.indexOf('@') != email.lastIndexOf('@') || email.indexOf('@') == -1) errorMess('отсутствует @')
    
    // проверка на наличие . после @
    if(email.lastIndexOf('.') < email.indexOf('@') || email.indexOf('.') == -1) errorMess('отсутствует . после @')
    
    // проверка на наличие . после @


    //проверка первого и последнего
    if(availableCharsSpec.includes(email[0]) || availableCharsSpec.includes(email[email.length - 1])) errorMess('некорректный первый или последний символ');    
    
    //проверка на повторение . @ - _
    for(let i = 1; i <= email.length; i++) {// с единицы чтобы не обращалось к несуществующему символу
        if(availableCharsSpec.includes(email[i]) && availableCharsSpec.includes(email[i - 1])){
            errorMess('недопустимое повторение символов');
            break;
        }
    }
    //проверка на корректность имени // первый символ должен проверится в общем случае, а последний в проверке на повторение
    let name = email.substring(0, email.indexOf('@'));
    if(name.length < 2){
        errorMess('длина имени до @ меньше 2 символов');
    }
    //проверка на корректность домена
    let domen = email.substring(email.lastIndexOf('.')+1, email.length-1);
    if(domen.length < 2 || domen.length > 11){
        errorMess('длина домена меньше 2 либо больше 11 символов');
    }
    if(flag) console.log(`Адрес ${email} корректный!`);
}

