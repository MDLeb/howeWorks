//Свойство data – для хранения данных о контакте в виде простого объекта со сл. полями: id,
// name, email, address, phone.
// 2. Метод edit(obj) – для редактирования данных контакта. В качестве параметра метод должен
// принимать объект с обновленными данными и обновлять свойство data.
// 3. Метод get() – для получения данных о контакте. Метод должен возвращать объект с данными
// из св-ва data.
// 4. При создании объекта на основе этого класса важно передать в конструктор данные о контакте
// в виде объекта для дальнейшего сохранения в св-во data.

class User {
    #data = {
        id:'',
        name:'',
        email:'',
        address:'',
        phone:'',
    }

    constructor(obj) {
        for(let key in obj) {
            if(key == 'id') continue;
            this.#data[key] = obj[key];
        }
    }

    edit = (obj) => {
        for(let key in obj) {
            if(key == 'id') continue;
            this.#data[key] = obj[key];
        }
    }
    
    setID (ID) {
        this.#data.id = ID;
    }

    get get() {
        return this.#data;
    }

}
