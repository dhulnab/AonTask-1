const { readFileSync } = require("fs");

const getAllUser = () => {
  //TODO: Read file and return users here
  try {
    let users = JSON.parse(readFileSync("./users.json", "utf8"))
    return users;
  } catch (error) {
    console.log(error)
  }
};

const getFirstUser = (list) => {
  //TODO: get first user of list
  if (list && list.length > 0) {
    console.log(list[0]);
  } else {
    console.log("The list is empty");
  }
};

const getLast = (list) => {
  //TODO: get last user of list
  if (list && list.length > 0) {
    console.log(list[list.length - 1]);
  } else {
    console.log("The list is empty");
  }
};

const getUserByID = (list, userID) => {
  //TODO: get user object by id
  if (list && list.length > 0) {
    let user = list.find(user => user.id === userID);
    console.log(user);
  } else {
    console.log("The list is empty");
  }
};

const getUserByCompanyName = (list, companyName) => {
  //TODO: get user object by company name
  if (list && list.length > 0) {
    let user = list.find(user => user.company.name === companyName);
    console.log(user);
  } else { console.log("The list is empty"); }
};

const getUsersByCity = (list, city) => {
  //TODO: get users that live in this city
  if (list && list.length > 0) {
    let user = list.filter(user => user.address.city === city);
    console.log(user);
  } else { console.log("The list is empty"); }

};

const getStreet = (list, userID) => {
  //TODO: get street name by userID
  if (list && list.length > 0) {
    let user = list.find(user => user.id === userID);
    console.log(user.address.street);
  } else { console.log("The list is empty"); }
};

const addNewUser = (list, userObject) => {
  //TODO: add new user to the list
  list.push(userObject);
  return list;
};

const updateUser = (list, userID, newEmail) => {
  //TODO: update email when id === userID
  if (list && list.length > 0) {
    let user = list.find(user => user.id === userID)
    user.email = newEmail;
    return list;
  } else { console.log("The list is empty"); }

};

const deleteUserById = (list, userID) => {
  //TODO: remove user when id === userID
  if (list && list.length > 0) {
    const index = list.findIndex(user => user.id === userID);
    if (index !== -1) {
      list.splice(index, 1);
      return list;
    } else {
      console.log("User not found in the list.");
    }
  } else { console.log("The list is empty"); }
};

module.exports = {
  getAllUser,
  getFirstUser,
  getLast,
  getUserByID,
  getUserByCompanyName,
  getUsersByCity,
  getStreet,
  addNewUser,
  updateUser,
  deleteUserById,
};
