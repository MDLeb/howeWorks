//для задания 1 и 2
let user = {
        name: null,
        age: null,
        city: null,
        phone: null,
        email: null,
        company: null   
    };
//переменные для задания 5 и 6
a = 10;
b = 2;

//переменная для задания 8, 10
let day;
const Months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

function task1() {
    
    for (key in user) {
    user[key] = prompt(`Enter your ${key}`);
    }
    let message = `${user.name ? `Меня зовут ${user.name}. ` : ''}`
                  + `${user.age ? `Мне ${user.age}. ` : ''}`
                  + `${user.city ? `Я проживаю в городе ${user.city}. ` : ''}`
                  + `${user.company ? ` и работаю в компании ${user.company}. ` : ''}`
                  + `${user.phone || user.email ? 'Мои контактные данные: ' : ''}`
                  + `${user.phone ? `телефон ${user.phone}` : ''}`
                  + `${user.email ? ` почта ${user.email}` : ''}`;

    console.log(message);
} 

function task2() {
    let todayDate = new Date;
    let birthYear = todayDate.getFullYear() - user.age;
    console.log(`${user.name} родился в ${birthYear}`);
}

function task3() {
    let str = prompt('Введите строку из 6 цифр:').split('');
    let sum1 = 0, sum2 = 0;
    for(let i = 0; i < str.length/2; i++) {
        sum1 += parseInt(str[i]);
    }
    for(let i = str.length - 1; i >= str.length/2; i--) {
        sum2 += parseInt(str[i]);
    }

    let result = (sum1 > sum2 ? 'больше' : sum1 == sum2 ? 'равна' : 'меньше');
    console.log(`Сумма первых ${str.length/2} цифр ${result} cуммы последних ${str.length/2} цифр`);
}

function task4() {
    let a = prompt('Введите положительное число');
    if (a > 0) {
        console.log("Верно, число больше нуля")
    }else if (a == 0) {
        console.log("Неверно, число равно нулю")
    }else console.log("Неверно, число меньше нуля");
}

function task5() {
    console.log(`Сумма ${a}+${b}=${a+b}. Разность ${a}-${b}=${a-b}. Произведение ${a}*${b}=${a*b}. Квадрат суммы (${a}+${b})^2=${Math.pow((a+b),2)}.`)
}

function task6() {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)){   
        console.log('Верно');
    }else console.log('Неверно');
}

function task7() {
    let minute = 59;
    if (minute < 15) console.log('1 четверть');
    else if (minute < 30) console.log('2 четверть');
    else if (minute < 45) console.log('3 четверть');
    else if (minute <= 59) console.log('4 четверть');
    else {} 
}

function task8() {
    day = prompt('Введите день месяца');
    if (day <= 10) console.log('1 декада');
    else if (day <= 20) console.log('2 декада');
    else if (day <= 31) console.log('3 декада');
    else {} 
}

function task9() {
    let allDays = prompt('Введите количество дней');
    let years, months, days;
    years = Math.floor(allDays / 365);
    months = Math.floor((allDays % 365) / 31);
    days = Math.floor((allDays % 365) % 31);
    let hours = allDays * 24;
    let minutes = allDays * 24 * 60;
    let seconds = allDays * 24 * 60 * 60;
    let result = `${allDays} дней - это ` +
                 `${years < 1 ? 'меньше года ' : (Number(String(years).split('').slice(-1))) == 1 ? years + ' год ' : (Number(String(years).split('').slice(-1))) >= 2 && (Number(String(years).split('').slice(-1))) <= 4 ? years + ' года ' : years + ' лет '}` + 
                 `${months < 1 ? 'меньше месяца ' : months == 1 ? months + ' месяц ' : months >= 2 && months <= 4 ? months + ' месяца ' : months + ' месяцев '}` +
                 `${days == 0 ? '' : days == 1 || days == 21 ? days + ' день ' : (days >= 2 && + days <= 4) || (days >= 21 && + days <= 24) ? days + ' дня ' : days + ' дней '}` + 
                 `или ${(Number(String(hours).split('').slice(-1))) == 1 ? hours + ' час ' : (Number(String(hours).split('').slice(-1))) >= 2 && (Number(String(hours).split('').slice(-1))) <= 4 ? hours + ' часа' : years + ' часов'} или ${minutes} минут или ${seconds} секунд`;
    console.log(result);
}

function task10() {
    day = prompt("Введите день года (до 365)");
    let month, season;
    if (day <= 31 ) {
        month = 1;
    }else if (day > 31 && day <= 62){
        month = 2;
    } else month = (day - (day % 31)) / 31 + 1;

    switch(month) {
        case 1:
        case 2:
        case 12: 
            season = 'Зима';
            break;
        case 3:
        case 4:
        case 5: 
            season = 'Весна';
            break;
        case 6:
        case 7:
        case 8: 
            season = 'Лето';
            break;
        case 9:
        case 10:
        case 11: 
            season = 'Осень';
            break;
    }
    console.log(season, Months[month-1]);
}

