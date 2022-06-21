class Contacts {
    #data = [];
    //#currentID = 0;

    constructor() {
       if(document.cookie && window.localStorage.contactsAppData) {
            this.#data = JSON.parse(window.localStorage.contactsAppData).map(elem => {
                let user = new User(elem);
                user.setID(elem.id);
                return user;
            });
       } else this.updateStorage();//установит в сторэдж пустой массив #datа
    }

    add = (obj) => {
        let user = new User(obj);
        //user.setID(this.#currentID);
        user.setID(Date.now());
        this.#data.push(user);
        //this.#currentID++;
        this.updateStorage();
        return user.get['id'];       
    }

    edit = (id, obj) => {
        let user = this.#data.find((elem) => elem.get.id == id);
        user.edit(obj);
        this.updateStorage();
    }

    remove = (id) => {
        let user = this.#data.find((elem) => elem.get['id'] == id);
        this.#data.splice(this.#data.indexOf(user), 1);
        this.updateStorage();
    }

    updateStorage = () => {
        let expire = 864000000;
        document.cookie = `storageExpiration=true; expires=${(new Date(Date.now() + expire)).toUTCString()}; path=/;`;
        let arr = Object.entries(this.get).map(el => el[1].get);
        window.localStorage.setItem('contactsAppData', '')
        window.localStorage.setItem('contactsAppData', JSON.stringify(arr));
    }

    get get() {
        let result = {};
        this.#data.forEach((elem) => {
            result[elem.get['id']] = elem;
        });
        return result;
    }
}






