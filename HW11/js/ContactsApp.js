// При создании объекта на основе этого класса в DOM должен добавляться главный контейнер
// приложения, например, «<div class=”contacts”></div>». Доступ к контейнеру должен быть
// через свойство «app» (должен хранить созданный элемент).
// 2. Также, в конструкторе или через любой метод в классе полностью создайте интерфейс вашего
// приложения внутри главного контейнера. Предусмотрите форму с полями и кнопками для
// добавления и редактирования контактов. Дизайн может быть любым, но адаптивным к
// мобильным устройствам.
// 3. Методы onSave(), onEdit() и onRemove() – должны срабатывать по клику по соотв. кнопкам в
// интерфейсе для добавления/редактирования/удаления контакта. Важно использование
// методов от «Contacts» при соотв. действиях.
// 4. Метод get() - для получения и обновления списка контактов в соотв. контейнере вашего
// приложения. Важно сохранить возможности родительского метода.

class ContactsApp extends Contacts{
    #container;
    #contactForm;//модалка для создания контакта
    #contactFormFields = {};//поля ввода
    #contactItem;//модалка для открытия контакта
    #allContactsList;

    createElem = (tagName, className) => {
        let elem = document.createElement(tagName);
        if (typeof className == 'string'){
            elem.classList.add(className);
        }else {
            className.forEach((element) => {
                elem.classList.add(element);
            });
        }
        return elem;
    }

    createApp = () => {
        this.#container = this.createElem('div', 'contacts');

        let name = this.createElem('h2', 'contacts__title');
        name.innerText = 'CONTACTS';
        
        let addBtn = this.createElem('button', ['contacts_add-btn', 'btn']);
        addBtn.addEventListener('click', () => {
            this.#contactForm.classList.toggle('active'); 
            this.validFields();
        });

        let searchField = this.createElem('div', 'contacts__search');
        let searchInput = this.createElem('input', 'contacts__search_input');
        searchInput.setAttribute('placeholder','Enter name or phone number for search :)')
        searchInput.addEventListener('keyup', (event) => {
            this.showContacts(event.target.value);
        })
        
        let searchBtn = this.createElem('button', ['contacts__search_btn', 'btn']);
        searchBtn.addEventListener('click', (event) => {
            this.showContacts(event.target.parentNode.querySelector('.contacts__search_input').value);
        })
        searchField.append(searchInput, searchBtn);

        //----------------------------------------------------------

        this.#allContactsList = this.createElem('div', 'contacts__list');
        
        let itemField = document.createElement('template');//template for each contact
        itemField.setAttribute('id', 'item-field');
        itemField.innerHTML = `<div class="item-field">
                                    <h3 class="item_name"></h3>
                                    <input hidden type="text" class="item_id">
                                    <button class="item_open-btn btn">open</button>
                                </div>`;
        
        //----------------------------------------------------------

        this.#contactForm = this.createElem('div', 'contact-form');
        
        ['name', 'email', 'address', 'phone'].forEach((elem) => {
            let contactField = this.createElem('div', 'contact-form__field');
            contactField.innerHTML = `<span class="contact-form__field_name">${elem}</span>
                                      <input type="text" id="contact-form__field_${elem}" class="contact-form__field_value">`;
            this.#contactForm.append(contactField);
            this.#contactFormFields[elem] = this.#contactForm.querySelector(`#contact-form__field_${elem}`);
        });
        let contactIdField = this.createElem('input', 'contact-form__id');
        contactIdField.setAttribute('hidden', '');
        this.#contactForm.append(contactIdField);
        this.#contactForm.querySelectorAll('.contact-form__field_value').forEach((elem) => {
            elem.addEventListener('keyup', this.validFields);
            //elem.addEventListener('change', this.validFields);
        });

        let saveBtn = this.createElem('button', ['contact-form__save_btn', 'btn']);
        saveBtn.innerText = 'save';
        saveBtn.addEventListener('click', (event) => {
            this.onSave();
            event.target.parentNode.classList.toggle('active');
        });

        let exitBtn = this.createElem('button', ['contact-form__exit_btn', 'btn']);
        exitBtn.addEventListener('click', (event) => {
            event.target.parentNode.classList.toggle('active');
            for(let key in this.#contactFormFields) {
                this.#contactFormFields[key].value = null;
            }
            this.#contactForm.querySelector('.contact-form__id').value = null;
            this.showContacts();
        });

        this.#contactForm.append(saveBtn, exitBtn);

        //-------------------------------------------------------------

        this.#contactItem = this.createElem('div', 'contact-item');
        
        ['name', 'email', 'address', 'phone'].forEach((elem) => {
             let contactItemField = this.createElem('div', 'contact-item__field');
             contactItemField.innerHTML = `<span class="contact-item__field_name">${elem}</span>
                                           <span class="contact-item__field_${elem}_value contact-item__field_value"></span>`;
             this.#contactItem.append(contactItemField);
        });
        let contactItemId = this.createElem('input', "contact-item__field_id");
        contactItemId.setAttribute('type', 'text');
        contactItemId.setAttribute('hidden', '');

        this.#contactItem.append(contactItemId);
        let itemExitBtn = exitBtn.cloneNode(true);
        let editBtn = this.createElem('button', ['contact-item__edit_btn', 'btn']);
        let removeBtn = this.createElem('button', ['contact-item__remove_btn', 'btn']);

        removeBtn.addEventListener('click', (event) => {
            let id = event.target.parentNode.querySelector('.contact-item__field_id').value;
            event.target.parentNode.classList.toggle('active');
            this.#contactItem.querySelectorAll('.contact-item__field_value').forEach((elem) => {
                elem.innerHTML = '';
            });          
            this.#contactForm.querySelector('.contact-form__id').value = null;
            this.onRemove(id);
        });

        editBtn.addEventListener('click', (event) => {
            this.editSelectedContact(event.target.parentNode.querySelector('.contact-item__field_id').value);
        });

        itemExitBtn.addEventListener('click', (event) => {
            event.target.parentNode.classList.toggle('active');
            this.showContacts();
        });
        this.#contactItem.append(itemExitBtn, editBtn, removeBtn);
        //--------------------------------------------------------------
        this.#container.append(name, addBtn, searchField, itemField, this.#contactForm, this.#contactItem, this.#allContactsList);
        document.body.append(this.#container);
    }

    onSave = () => {
        let data = {
            name: this.#contactFormFields['name'].value,
            email: this.#contactFormFields['email'].value,
            address: this.#contactFormFields['address'].value,
            phone: this.#contactFormFields['phone'].value,
        }
        for(let key in this.#contactFormFields) {
            this.#contactFormFields[key].value = null;
        }
        let currentUserID = this.#contactForm.querySelector('.contact-form__id').value;
        if(!currentUserID){
            currentUserID = this.add(data);
        }else{
            this.edit(currentUserID, data);
        }
        this.showSelectedContact(currentUserID);
        currentUserID = null;
    }
    onRemove = (id) => {
        let user = this.get[id];
        if(confirm(`Do you want to remove contact ${user.get['name']}`)){
            this.remove(id);
            this.showContacts();
        }
    }
    showSelectedContact = (id) => {
        let user = this.get[id];
        this.#contactItem.classList.toggle('active');
        ['name', 'email', 'address', 'phone'].forEach((elem) => {
            this.#contactItem.querySelector(`.contact-item__field_${elem}_value`).innerText = user.get[`${elem}`];
        });
        this.#contactItem.querySelector('.contact-item__field_id').value = null;
        this.#contactItem.querySelector('.contact-item__field_id').value = id;
    }

    editSelectedContact = (id) => {
        let user = this.get[+id];
        this.#contactItem.classList.toggle('active');
        this.#contactForm.classList.toggle('active');
        ['name', 'email', 'address', 'phone'].forEach((elem) => {
            this.#contactForm.querySelector(`#contact-form__field_${elem}`).value = user.get[`${elem}`];
        });
        this.validFields();
        this.#contactForm.querySelector('.contact-form__id').value = user.get[`id`];
    }

    showContacts = (query = false) => {
        document.querySelectorAll('.item-field').forEach((elem) => elem.remove());
        let contactsList = [];
        function SortArray(x, y){
            return x.get.name.localeCompare(y.get.name);
        }
        if(!query){
            for(let user in this.get) {
                contactsList.push(this.get[user]);
            }
        }else{
            for(let user in this.get) {
                if(this.get[user].get.name.toLowerCase().includes(query.toLowerCase()))
                contactsList.push(this.get[user]);
                if(this.get[user].get.phone.toLowerCase().includes(query.toLowerCase()))
                contactsList.push(this.get[user]);
            }
        }
        contactsList.sort(SortArray);
        contactsList.forEach((elem) => {
            let item = document.querySelector('#item-field').content.cloneNode(true);
            
            if(elem.get['name'])           
                item.querySelector('.item_name').innerText = elem.get['name'];
            else item.querySelector('.item_name').innerText = elem.get['phone'];
            item.querySelector('.item_id').value = elem.get['id'];
            this.#allContactsList.append(item);
        });
        document.querySelectorAll('.item_open-btn').forEach((elem) => {
            elem.addEventListener('click', (event) => {
                let id = +event.target.parentNode.querySelector('.item_id').value;
                this.showSelectedContact(id);
            })
        });
    }

    validFields = () => {
        let regExpPhone = /^[+]*[0-9 -]{3,18}$/;//+
        let isValid = false;
        let valuePhone = this.#contactForm.querySelector(`#contact-form__field_phone`);
        if(valuePhone){
            if(regExpPhone.test(valuePhone.value)){
                isValid = true;
                this.#contactForm.querySelector('.contact-form__save_btn').removeAttribute('disabled');
            }
        }
        if (!isValid) this.#contactForm.querySelector('.contact-form__save_btn').setAttribute('disabled', '');
    }


}

