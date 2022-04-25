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
    #contactForm;

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

        let itemField = document.createElement('template');
        itemField.setAttribute('id', 'item-field');
        let itemName = this.createElem('h3', 'item_name');
        let itemOpenBtn = this.createElem('button', 'item_open-btn');

        this.#contactForm = this.createElem('div', 'contact-form');
        
        ['name', 'email', 'address', 'phone'].forEach((elem) => {
            let contactField = this.createElem('div', 'contact-form__field');
            contactField.innerHTML = `<span class="contact-form__field_name">${elem}</span><input type="text" id="contact-form__field_${elem}">`;
            this.#contactForm.append(contactField);
        });

        let saveBtn = this.createElem('button', ['contact-form__save_btn', 'btn']);
        saveBtn.innerText = 'save';
        saveBtn.addEventListener('click', this.onAdd);

        let exitBtn = this.createElem('button', ['contact-form__exit_btn', 'btn']);
        exitBtn.addEventListener('click', () => {this.#contactForm.classList.toggle('active')});

        this.#contactForm.append(saveBtn, exitBtn);

        this.#container.append(name, addBtn, searchField, itemField, this.#contactForm);
        document.body.append(this.#container);
    }

    onAdd = () => {
        console.log('++');
    }

}