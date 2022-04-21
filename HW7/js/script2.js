let userList = [];

var ID = 0;

class User {
    #name;
    #phone;
    #email;
    #id;
    #isAdmin = false;

    constructor(name, phone = '', email = '', isAdmin = false) {
        this.#name = name;
        this.#phone = phone;
        this.#email = email;
        this.#isAdmin = isAdmin;
        this.#id = ++ID;
        userList.push(this);
    }

    removeUser() {
       if(userList.includes(this)) userList.splice(userList.indexOf(this), 1);
    }

    set phoneNumber(phone) {
        this.#phone = phone;
    }
    get phoneNumber() {
        if(this.#phone != '') return this.#phone;
        else return ('Номер не определен')
    }
    
    get isAdmin() {
        return this.#isAdmin;
    }

    get id() {
        return this.#id;
    }

}



let user1 = new User('Ivan', '', 'ivan@mail.ru', true);
console.log(user1);

let user2 = new User('Vasya', '+375291231212');
console.log(user2);

let user3 = new User('Ann');
console.log(user3);

console.log(userList)

user1.removeUser();
console.log(userList);

console.log(user2.phoneNumber);

console.log(user3.phoneNumber);
user3.phoneNumber = '+375291234455';
console.log(user3.phoneNumber);
console.log(user3.id);
console.log(user3.isAdmin);