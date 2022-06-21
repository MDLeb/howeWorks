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
