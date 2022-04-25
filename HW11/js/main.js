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

for(let i = 0; i < 50; i++) {
    application.add({
        name:`${i}name`,
        email:`${i}name@mail.ru`,
        address:'Moscow',
        phone:`${i+1}${i+3}${i+10}${i+11}`,
    })
}

application.createApp();
application.showContacts();