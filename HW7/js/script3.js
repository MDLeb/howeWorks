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

    }
    
    this.clear = function() {
        data = [];
    }

}

let list = new List();
let listObj = document.querySelector('.todo-list__items'); 
let itemObj = document.querySelector('#todo-item').content;//template

const addItem = function() { //открывает инпут
    document.querySelector('.modal').classList.toggle('active');
}

const addItemOk = function(item) { //пушит в массив листа и выводит в список
    let newItem = new Item(item.parentNode.querySelector('input').value);
    if(newItem !== '') {
        list.add(newItem);
        let newItemObj = itemObj.cloneNode(true);
        newItemObj.querySelector('.text').innerText = newItem.text;
        newItemObj.querySelector('.id').value = newItem.id;
        listObj.appendChild(newItemObj);
        item.parentNode.querySelector('input').value = null;
        item.parentNode.classList.toggle('active');
    }
}

const changeState = function(item) {
    let id = item.parentNode.querySelector('.id').value;
    list.changeItemState(id);
}
 const deleteCompleted = function() {
    list.get().forEach((item) => {
        if(item.status){
            // listObj.querySelectorAll('.todo-item').find((elem) => {
            //     elem.querySelector('.id').value == item.id;
            // }
        listObj.querySelectorAll('.todo-item').forEach((elem) => {
            if(elem.querySelector('.id').value == item.id)
            elem.remove();
        });
        }
    });
 }

 const clearList = function() {
    list.clear();
    listObj.querySelectorAll('.todo-item').forEach((elem) => {
        elem.remove();
    });
 }