let Item = function(string, id = 0) {
    this.text = string;
    this.status = false;
    this.id = id;
}

let List = function() {
    let data = [];
    let nextId = 0;

    this.add = function(obj) {
        obj.id = nextId++;
        data.push(obj);
    }

    this.get = function() {
        return data;
    }

    this.changeItemState = function(id) {
        let obj = data.find(item => item.id == id);
        obj.status = !obj.status;
    }

    this.deleteCompleted = function() {
        this.get().forEach((item) => {
            if(item.status){
                listObj.querySelectorAll('.todo-item').forEach((elem) => {
                    if(elem.querySelector('.id').value == item.id)
                    elem.remove();
            });
            }
        });
    }
    
    this.clear = function() {
        data = [];
    }

}

const checkList = function() {
    let message;
    if(!document.querySelectorAll('.todo-item').length){
        message = document.createElement('span');
        message.classList.add('message');
        message.innerText = "There is nothing to do :)";
        document.querySelector('.todo-list__items').append(message);
    }
    else if(document.querySelector('.message')) document.querySelector('.message').remove();
}

const addItem = function() { //открывает инпут
    document.querySelector('.modal').classList.toggle('active');
}

const addItemOk = function(item) { //пушит в массив листа и выводит в список
    let newItem = new Item(item.parentNode.querySelector('input').value);
    let regex = new RegExp('^[a-z0-9/s]+', 'i');
    if(regex.test(newItem.text)) {
        list.add(newItem);
        let newItemObj = itemObj.cloneNode(true);
        newItemObj.querySelector('.text').innerText = newItem.text;
        newItemObj.querySelector('.id').value = newItem.id;
        listObj.appendChild(newItemObj);
        item.parentNode.querySelector('input').value = null;
        item.parentNode.classList.toggle('active');
    }
    checkList();
}



const changeState = function(item) {
    let id = item.parentNode.querySelector('.id').value;
    list.changeItemState(id);
    item.parentNode.querySelector('.text').classList.toggle('line-through');
}
 const deleteCompleted = function() {
    list.deleteCompleted();
    checkList();
 }

 const clearList = function() {
    list.clear();
    listObj.querySelectorAll('.todo-item').forEach((elem) => {
        elem.remove();
    });
    checkList();
 }

let list = new List();
let listObj = document.querySelector('.todo-list__items'); 
let itemObj = document.querySelector('#todo-item').content;//template
checkList();
