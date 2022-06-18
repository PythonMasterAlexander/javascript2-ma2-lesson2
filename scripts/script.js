import { inputElement, buttonElement, unorderedListContainer } from "./constants/constants.js";
import { createHtml } from "./components/createHtml.js";
import { users, removeSearchOnUsers } from "./components/removeSearchOnUsers.js";

unorderedListContainer.innerHTML = "";

buttonElement.addEventListener('click', removeSearchOnUsers(parseInt(inputElement.value.trim())));

inputElement.value = "";
inputElement.focus();

for(let i = 0; i < users.length; i++) {
  const userName = users[i].name;
  const userId = users[i].id;
  const userGender = users[i].gender;

  unorderedListContainer.innerHTML += createHtml(userName, userId, userGender);
}

//loop over old array
//when a list item is removed push the removed item to another list and loop over the old list
//Try to push users to a new list