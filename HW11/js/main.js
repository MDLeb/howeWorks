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

application.add({
    name:'Ann',
    email:'ann@mail.ru',
    address:'Minsk',
    phone:'+375 33 777 11 11',
})
for(let i = 0; i < 5; i++) {
    application.add({
        name:`${String.fromCharCode(i+64)}${String.fromCharCode(i+67).toLocaleLowerCase()}${String.fromCharCode(i+65).toLocaleLowerCase()}${String.fromCharCode(i+66).toLocaleLowerCase()}`,
        email:`${i}name@mail.ru`,
        address:'Moscow',
        phone:`${i+100}${i+50}${i+60}`,
    });
}

application.createApp();
application.showContacts();