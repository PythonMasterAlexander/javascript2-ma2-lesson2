//import { removeUserById } from "./components/removeUserById.js";
let users = [
  { id: 1, name: "Emma", gender: "Female" },
  { id: 2, name: "Oscar", gender: "Male" },
  { id: 3, name: "Alexis", gender: "Female" },
  { id: 4, name: "Adam", gender: "Male" },
];

//Do the same function with a on one line using arrow syntax
const idNumberToRemove = 1;
//TODO get the code in lesson 2 right
const removeUserById = function(idNumberToRemove) {
  /*
  const userToRemove = function(user) {
    if(user.id !== idNumberToRemove) {
      return true;
    }
  };
  */

  const newUsersList = users.filter((user) => user.id !== idNumberToRemove);
  users = newUsersList;
}

console.log(users);
removeUserById(idNumberToRemove);
console.log(users);