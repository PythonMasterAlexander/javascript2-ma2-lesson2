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

const filterUsersArr = function(user) {
  if(user.name !== 'Emma') {

    return true;
  }
};

const useFilterOnInputValue = users.filter(filterUsersArr);
users = useFilterOnInputValue;


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

