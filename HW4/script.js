function task1() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function task2() {
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    let arr2 = arr.filter(item => item > -10 && item < -3);
    arr2.forEach(item => console.log(item));
}
function task3() {
    let arr1 = [], arr2 = [];
    let min = 23, max = 57;
    let result = 0;
    for(let i = min; i <= max; i++) {
        arr1.push(i);
        result += i;
    }
    let j = min;
    while(j <= max) {
        arr2.push(j);
        j++;
    }
    console.log(arr1, arr2);
    console.log(result);
}
function task4() {
    let arr = ['10', '20', '30', '50', '235', '3000'];
    arr.forEach(item => {
        item[0] === '1' || item[0] === '2' || item[0] === '5' ? console.log(item) : '';
    });
}
function task5() {
    let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    week.forEach(item => {
        switch (item) {
            case 'Сб':
            case 'Вс':
                console.log(`%c${item}`, 'font-weight: 1000');
                break;
            default: console.log(item);
        }
    });
}
function task6() {
    let arr = ['123', 123, -1, 'aaa'];
    arr.push('element');
    console.log(arr[arr.length-1]);
}
function task7() {
    let arr = [];
    while(true) {
        let element = prompt('Введите число или пустое значение, чтобы завершить');
        if (!element) break;
        arr.push(element);
    }
    console.log(arr);
    arr.sort((a, b) => a - b);
    console.log(arr);
}
function task8() {
    let arr = [12, false, 'Текст', 4, 2, -5, 0];
    let arr2 = [];
    let i = arr.length - 1;
    while(i >= 0) {
        arr2.push(arr[i]);
        i--;
    }
    console.log(arr2);
    console.log(arr.reverse(), arr);
}
function task9() {
    let arr = [5, 9, 21, , , 9, 78, , , , 6];
    let numEmpty = 0;
    for(let i = 0; i < arr.length; i++){
        if(!arr[i]) numEmpty++;  
    }
    console.log(numEmpty);
}
function task10() {
    let arr = [1,8,1,2,3,4,1,1,1,2,3,2];
    let a = arr.indexOf(0);
    let b = arr.lastIndexOf(0);
    let sum = 0;
    if(a == b || a == -1) console.log(0);
    else{
        for(a; a < b; a++) {
            sum += arr[a];
        }
        console.log(sum);
    }
}
function task11() {
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