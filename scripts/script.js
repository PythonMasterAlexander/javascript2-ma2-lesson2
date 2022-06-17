import { inputElement, buttonElement, unorderedListContainer } from "./constants/constants.js";
import { createHtml } from "./components/createHtml.js";
import { users, removeSearchOnUsers } from "./components/removeSearchOnUsers.js";

unorderedListContainer.innerHTML = "";

buttonElement.addEventListener('click', removeSearchOnUsers(parseInt(inputElement.value)));

for(let i = 0; i < users.length; i++) {
  const userName = users[i].name;
  const userId = users[i].id;
  const userGender = users[i].gender;

  unorderedListContainer.innerHTML += createHtml(userName, userId, userGender);
}