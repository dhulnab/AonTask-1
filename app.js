let helper = require("./helper");

let list = helper.getAllUser();
// console.log(list);

helper.getFirstUser(list)
helper.getLast(list)
helper.getUserByID(list,4)
helper.getUserByCompanyName(list,"Hoeger LLC")
helper.getUsersByCity(list,"McKenziehaven")
helper.getStreet(list,3)

// I use console.log(list) after add,update,delete functions, 
// and I didn't put it in the functions body, 
// and replace it with 'return' ... 
// because I don't want to print the entire list after each add,update,delete operation
// so it's kind of practical change.

helper.addNewUser(list, {
    "id": 11,
    "name": "Ali",
    "username": "ali22",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  })
console.log(list);

helper.updateUser(list,11,"wwaliaa77@gmail.com")
console.log(list);

helper.deleteUserById(list, 11);
console.log(list)