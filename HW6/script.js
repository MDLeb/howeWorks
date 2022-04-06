function func1() {
    let str = 'aaa@bbb@ccc';
    console.log(str.replace((/@/g), '!'));
}
function func2() {
    let date = prompt('Введите дату в формате гггг-мм-дд');
    let dateFormatted = date.split('-').reverse().join('/');
    console.log(dateFormatted)
}
function func3() {
    let str = 'Я учу javascript';
    console.log(str.substring(2, 5));
    console.log(str.substr(2, 3));
    console.log(str.slice(2, 5));
}
function func4() {
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;
    arr.forEach(elem => {
        sum += Math.pow(elem, 3);
    });
    console.log(Math.pow(sum, 1/2));
}
function func5() {
    let a = +prompt('Введите a');
    let b = +prompt('Введите b');
    let c = Math.abs(a - b);
    console.log(`Модуль (${a} - ${b}) = ${c}`);
}
function func6() {
    let date = new Date();
    let timeFormatted = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    let dateFormatted = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.' + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' + date.getFullYear();
    console.log(timeFormatted, ' ', dateFormatted);
}
function func7() {
    let str = 'aa aba abba abbba abca abea';
    console.log(str.match(/ab+a/g));
}
function func8() {
    let phoneNum = prompt('Введите номер телефона в формате +ххх хх ххххххх');
    const phoneReg = /^\+[1-9]{3} [1-9]{2} [1-9]{3}[1-9]{2}[1-9]{2}$/g;
    console.log(phoneReg.test(phoneNum));
}
function func9() {
    let email = prompt('Введите адрес электронной почты');
    const emailReg = /^[a-z0-9]+([.-_]{1}[a-z0-9]+)*@{1}(\w+\.)+[a-z0-9]{2,11}$/i;
    console.log(emailReg.test(email));
}