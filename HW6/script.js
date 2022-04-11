function func1() {
    let str = 'aaa@bbb@ccc';
    console.log(str.replace((/@/g), '!'));
}
function func2() {
    let date = prompt('Введите дату в формате гггг-мм-дд');
   // let dateFormatted = date.split('-').reverse().join('/');
    let dateFormatted = date.replace(/(\d{4})\-(\d{2})\-(\d{2})/, '$3/$2/$1');
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
    let phoneNum = prompt('Введите номер телефона в формате');
    const phoneReg = /^(3\d{11}$)|(8\d{10}$)/g;
    let phone = phoneNum.match(/\d{1,12}/g).join('');
    console.log(phone, phoneReg.test(phone));
}
function func9() {
    let email = prompt('Введите адрес электронной почты');
    const emailReg = /^[a-z0-9]+([.-_]{1}[a-z0-9]+)*@{1}(\w+\.)+[a-z0-9]{2,11}$/i;
    console.log(emailReg.test(email));
}
function func10() {
  // let url = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
  //  let url = 'https://www.google.com/search?q=github&oq=github+&aqs=chrome..69i57j69i60l4.4517j0j7&sourceid=chrome&ie=UTF-8';
    let url = 'https://ru.stackoverflow.com/questions/488935/regexp-%D1%81%D0%BE%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D1%83%D1%8E%D1%89%D0%B8%D0%B9-%D0%BB%D1%8E%D0%B1%D0%BE%D0%BC%D1%83-%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%D1%83-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2-%D0%B4%D0%BE-%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B3%D0%BE-%D0%B2%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE%D0%B4%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8';
    
    let urlDomReg = /https{0,1}\:\/\/(\w+\.)+[a-z]{2,11}/,
        urlMethodReg = /(.*)(?=\?|$)/,
        urlHashReg = /\#\w+/;
    let urlDom = url.match(urlDomReg)[0],
        urlMethod = url.slice(urlDom.length).match(urlMethodReg)[0],
        urlHash = url.match(urlHashReg) ? url.match(urlHashReg)[0] : '';
        urlParams = urlHash ? url.slice((urlDom.length + urlMethod.length), (url.length - urlHash.length)) : url.slice((urlDom.length + urlMethod.length), url.length)
    let arr = [urlDom, urlMethod, urlParams, urlHash];
    console.log(arr);
}