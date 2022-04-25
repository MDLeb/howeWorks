let DOM = function() {

    this.create = (tagName) => {//для создание и возврата новых элементов по имени тега;
        return document.createElement(tagName);
    }
    this.attr = (element, name, value = '') => { //для добавления атрибута к элементу или возврата значения атрибута;
        if(value) element.setAttribute(name, value);
        return element.getAttribute(name);
    }
    this.html = (element, value = '') => { //для добавления любого содержимого внутрь элемента или его возврата;
        if(value) element.innerHTML = value;
        return element.innerHTML;
    }
    this.search = (element, selector) => { //для поиска и возврата найденных элементов внутри переданного или в document по селектору CSS.
        return element.querySelector(selector);
    }
    this.addClass = (element, className) => {//для добавления класса к элементу;
        element.classList.add(className);
    }
    this.removeClass = (element, className) => {//для удаления класса из элемента;
        element.classList.remove(className);
    }
    this.toggleClass = (element, className) => { //для переключения класса в элементе;
        element.classList.toggle(className);
    }
    this.hasClass = (element, className) => {//для проверки существования класса в элементе (должен вернуть true или false);
        let res = false;
        element.classList.forEach((elem) => {
            console.log(elem, className);
            if(elem === className) res = true;
        });
        return res;
    }
    this.append = (element, newElement, [beforeElement]) => {//для добавления новых элементов внутрь какого-либо после всего его содержимого, либо перед каким-то конкретным;
        if(!beforeElement) element.append(newElement);
        else beforeElement.before(newElement);
    }
    this.on = (element, eventName, funcName) => {//для добавления к элементу события и выполнения функции (проверьте доступность контекста this и event).
       element.setAttribute(`on${eventName}`, `${funcName}(event)`);
    }
}



let Dom = new DOM();

//console.log(Dom.create('div'));
let elem = Dom.create('div');

Dom.attr(elem, 'onclick', 'console.log(`++`)');
//console.log(Dom.attr(elem, 'onclick'));

Dom.html(elem, '<span>ghjkl</span>');
//console.log(Dom.html(elem));

Dom.addClass(elem, 'active');
Dom.addClass(elem, 'dark');
//console.log(Dom.hasClass(elem));
let elem1 = document.querySelector('.div1');

let info = function(obj) {
    console.log(obj);
}

Dom.on(elem1, 'click', 'info');
