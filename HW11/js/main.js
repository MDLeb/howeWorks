let application = new ContactsApp()

application.add({
    name:'Alex',
    email:'alex@mail.ru',
    address:'Minsk',
    phone:'+375 29 555 22 33',
})

application.add({
    name:'Bob',
    email:'bob@mail.ru',
    address:'Moscow',
    phone:'+375 33 777 11 11',
})

application.createApp();
application.showContacts();