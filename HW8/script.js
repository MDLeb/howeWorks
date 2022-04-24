const createELem = (tagName, className) => {
    let elem = document.createElement(`${tagName}`);
    elem.classList.add(`${className}`);
    return elem;
    
}
const setStyle = (elem, obj) => {
    let styleStr = '';
    for (key in obj) {
        styleStr += `${key}:${obj[key]}; `;
    }
    elem.setAttribute('style', `${styleStr}`);
}

let mainDivObj = createELem('div', 'main');
setStyle(mainDivObj, {
    'width': '800px',
    'height': '540px',
    'margin': '20px auto',
    'display': 'flex',
    'flex-wrap': 'wrap',
});

let mainH2Obj = createELem('h2', 'main_h2');
mainH2Obj.innerText = 'Choose Your Option';
setStyle(mainH2Obj, {
    'font-family': 'Arvo', 
    'font-size': '36px',
    'line-height': '48px',
    'text-align': 'center',
    'width': '100%',
    'margin-bottom': '10px',
});


let mainSpanObj = createELem('span', 'main_span');
mainSpanObj.innerText = 'But I must explain to you how all this mistaken idea of denouncing';
setStyle(mainSpanObj, {
    'font-family': '"Open Sans", sans-serif',
    'font-size': '14px',
    'line-height': '26px',
    'text-align': 'center',
    'display': 'block',
    'width': '100%',
    'margin-bottom': '50px',
    'color': '#9FA3A7',
});

let itemDivObj = createELem('div', 'main__item'); //клонировать 2 раза
setStyle(itemDivObj, {
    'height': '480px',
    'flex': '1',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'align-items': 'center',
    'padding': '80px 80px'
});

let h2Obj = createELem('div', 'main__item_h2');
setStyle(h2Obj, {
    'font-family': 'Arvo',
    'font-size': '36px',
    'line-height': '46px',
    'text-align': 'center',

});

let h3Obj = createELem('div', 'main__item_h3');
setStyle(h3Obj, {
    'font-family': 'Montserrat',
    'font-size': '12px',
    'font-weight': '700',
    'line-height': '15px',
    'letter-spacing': '2.4px',
    'text-align': 'center',
    'text-transform': 'uppercase',
    'color': '#9FA3A7',

});

let pObj = createELem('div', 'main__item_p');
setStyle(pObj, {
    'font-family': '"Open Sans", sans-serif',
    'font-size': '14px',
    'line-height': '22px',
    'text-align': 'center',
    'color': '#9FA3A7',
});

let btnObj = createELem('div', 'main__item_btn');
btnObj.innerText = 'start here';
setStyle(btnObj, {
    'height': '45x',
    'width': '145px',
    'border': '3px solid #FFC80A',
    'border-radius': '50px',
    'font-size': '12px',
    'font-family': 'Montserrat, serif', 
    'font-weight': 'bold',
    'text-align': 'center',
    'letter-spacing': '2.4px',
    'line-height': '45px',
    'text-transform': 'uppercase',
    'cursor': 'pointer',
    'transition': 'all 0.5s'
});

itemDivObj.append(h3Obj, h2Obj, pObj, btnObj);

let item1 = itemDivObj.cloneNode(true);
item1.querySelector('.main__item_h3').innerText = 'freelancer';
item1.querySelector('.main__item_h2').innerText = 'Initially designed to';
item1.querySelector('.main__item_p').innerText = 'But I must explain to you how all this mistaken idea of denouncing';

let item2 = itemDivObj.cloneNode(true);
item2.querySelector('.main__item_h3').innerText = 'studio';
item2.querySelector('.main__item_h2').innerText = 'Initially designed to';
item2.querySelector('.main__item_p').innerText = 'But I must explain to you how all this mistaken idea of denouncing';

function main() {
    document.body.innerHTML = `<style>
                                    body {
                                        width: 100vw;
                                        height: 95vh;
                                    }
                                    * {
                                        box-sizing: border-box;
                                    }
                                    .main__item:nth-of-type(2) {
                                        color: white;
                                        background-color: #8F75BE;
                                    }
                                    .main__item:nth-of-type(2) .main__item_h3 {
                                        color: #FFC80A !important;
                                    }
                                    .main__item:nth-of-type(2) .main__item_p {
                                        color: white !important;
                                    }
                                </style>`;
    mainDivObj.append(mainH2Obj, mainSpanObj, item1, item2);
    document.body.append(mainDivObj);
    document.querySelectorAll('.main__item_btn').forEach((btn) => {
        btn.addEventListener('mouseover', (event) => {
            event.target.style.filter = 'drop-shadow(2px 0px 8px #FFC80A)';
        });
        btn.addEventListener('mouseleave', (event) => {
            event.target.style.filter = 'none';
        });
    });
}

main();
