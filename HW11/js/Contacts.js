// Свойство data – для хранения всех добавленных контактов в массиве. Каждый эл-т массива
// должен представлять собой объект созданный на основе класса «User».
// 2. Метод add() – для создания контакта (на основе класса «User») и добавления его в массив data.
// 3. Метод edit(id, obj) – для редактирования информации конкретного контакты из св-ва data,
// используя соответствующий метод из «User». В качестве параметра нужно передать
// идентификатор контакта для последующего поиска и объект с новыми данными для
// редактирования.
// 4. Метод remove(id) – для удаления контакта из общего массива данных по идентификатору. В
// качестве параметра нужно передать идентификатор контакта.
// 5. Метод get() – для получения всех контактов. Метод должен возвращать объект с данными из
// св-ва data.

class Contacts {
    #data = [];
    #currentID = 0;

    constructor() {

    }

    add = (obj) => {
        let user = new User(obj);
        user.setID(this.#currentID);
        this.#data.push(user);
        this.#currentID++;
        return user.get['id'];
    }

    edit = (id, obj) => {
        let user = this.#data.find((elem) => elem.get.id == id);
        user.edit(obj);
    }

    remove = (id) => {
        let user = this.#data.find((elem) => elem.get['id'] == id);
        console.log(user);
        this.#data.splice(this.#data.indexOf(user), 1);
    }

    get get() {
        let result = {};
        this.#data.forEach((elem) => {
            result[elem.get['id']] = elem;
        });
        return result;
    }
}






