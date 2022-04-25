// При создании объекта на основе этого класса в DOM должен добавляться главный контейнер
// приложения, например, «<div class=”contacts”></div>». Доступ к контейнеру должен быть
// через свойство «app» (должен хранить созданный элемент).
// 2. Также, в конструкторе или через любой метод в классе полностью создайте интерфейс вашего
// приложения внутри главного контейнера. Предусмотрите форму с полями и кнопками для
// добавления и редактирования контактов. Дизайн может быть любым, но адаптивным к
// мобильным устройствам.
// 3. Методы onAdd(), onEdit() и onRemove() – должны срабатывать по клику по соотв. кнопкам в
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
        addBtn.addEventListener('click', () => {this.#contactForm.classList.toggle('active')});

        let searchField = this.createElem('div', 'contacts__search');
        let searchInput = this.createElem('input', 'contacts__search_input');
        let searchBtn = this.createElem('button', ['contacts__search_btn', 'btn']);
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
            contactField.innerHTML = `<span class="contact-form__field_name">${elem}</span><input type="text" id="contact-form__field_${elem}">`;
            this.#contactForm.append(contactField);
            this.#contactFormFields[elem] = this.#contactForm.querySelector(`#contact-form__field_${elem}`);
        });

        let saveBtn = this.createElem('button', ['contact-form__save_btn', 'btn']);
        saveBtn.innerText = 'save';
        saveBtn.addEventListener('click', (event) => {this.onAdd();event.target.parentNode.classList.toggle('active')});

        let exitBtn = this.createElem('button', ['contact-form__exit_btn', 'btn']);
        exitBtn.addEventListener('click', (event) => {event.target.parentNode.classList.toggle('active')});

        this.#contactForm.append(saveBtn, exitBtn);

        //-------------------------------------------------------------

        this.#contactItem = this.createElem('div', 'contact-item');
        
        let nameContactItem = this.createElem('h3', 'contact-item__title');
        ['name', 'email', 'address', 'phone'].forEach((elem) => {
             let contactItemField = this.createElem('div', 'contact-item__field');
             contactItemField.innerHTML = `<span class="contact-item__field_name">${elem}</span>
                                           <span class="contact-item__field_${elem}_value"></span>`;
             this.#contactItem.append(contactItemField);
        });
        let itemExitBtn = exitBtn.cloneNode(true);
        itemExitBtn.addEventListener('click', (event) => {event.target.parentNode.classList.toggle('active')});

        this.#contactItem.append(nameContactItem, itemExitBtn);
        //--------------------------------------------------------------
        this.#container.append(name, addBtn, searchField, itemField, this.#contactForm, this.#contactItem, this.#allContactsList);
        document.body.append(this.#container);
    }

    onAdd = () => {
        let data = {
            name: this.#contactFormFields['name'].value,
            email: this.#contactFormFields['email'].value,
            address: this.#contactFormFields['address'].value,
            phone: this.#contactFormFields['phone'].value,
        }
        for(let key in this.#contactFormFields) {
            this.#contactFormFields[key].value = null;
        }
        let addedUserID = this.add(data);
        this.showContacts();
    }

    showContacts = () => {
        document.querySelectorAll('.item-field').forEach((elem) => elem.remove());
        for(let user in this.get) {
            let item = document.querySelector('#item-field').content.cloneNode(true);
            item.querySelector('.item_name').innerText = this.get[user].get['name'];
            item.querySelector('.item_id').value = this.get[user].get['id'];
            this.#allContactsList.append(item);
        }
        document.querySelectorAll('.item_open-btn').forEach((elem) => {
            elem.addEventListener('click', (event) => {
                this.showSelectedContact(event.target.parentNode.querySelector('.item_id').value);
            })
        });
    }

    showSelectedContact = (id) => {
        let user = this.get[id];
        this.#contactItem.classList.toggle('active');
        ['name', 'email', 'address', 'phone'].forEach((elem) => {
            this.#contactItem.querySelector(`.contact-item__field_${elem}_value`).innerText = user.get[`${elem}`];
        });
    }

}

