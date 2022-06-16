import { inputElement, buttonElement, unorderedListContainer } from "./constants/constants.js";
import { createHtml } from "./components/createHtml.js";

let users = [
  {
    id: 1,
    name: "Emma",
    gender: "Female"
  },

  {
    id: 2,
    name: "Oscar",
    gender: "Male"
  },

  {
    id: 3,
    name: "Alexis",
    gender: "Female"
  },

  {
    id: 4,
    name: "Adam",
    gender: "Male"
  }
];

//This function I had some problems understanding, try doing it some more times
console.log(users)
const removeSearchOnUsers = function(checkIdAndRemove) {
  const filterIdOnUser = function(user) {
    if(user.id !== checkIdAndRemove) {
      return true;
    }
  };
  const newFilteredUsers = users.filter(filterIdOnUser);

  users =  newFilteredUsers;
};
removeSearchOnUsers(1);
console.log(users);



for(let i = 0; i < users.length; i++) {
  const userName = users[i].name;
  const userId = users[i].id;
  const userGender = users[i].gender;

  unorderedListContainer.innerHTML += createHtml(userName, userId, userGender);
}

const filterUser = function(){
  console.log(event.target);
};
buttonElement.addEventListener('click', filterUser);

