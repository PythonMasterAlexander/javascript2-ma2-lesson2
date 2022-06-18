//TODO Imports
import { buttonHtmlElement, inputHtmlElement, listItemsContainer } from "./constants/constants.js";
import { createHtml } from "./components/createHtml.js";

let users = [
  { id: 1, name: "Emma", gender: "Female" },
  { id: 2, name: "Oscar", gender: "Male" },
  { id: 3, name: "Alexis", gender: "Female" },
  { id: 4, name: "Adam", gender: "Male" },
];

//TODO Create one function. One for generating the list and removing the list when pushing the button
const generateList = function() {
  const inputValue = inputHtmlElement.value.trim();
  console.log(inputValue);
};

//TODO Create one function. One for creating the list
const createList = function() {
  listItemsContainer.innerHTML = ""

  for(let i = 0; i < users.length; i++) {
    const id = users[i].id;
    const name = users[i].name;
    const gender = users[i].gender;

    listItemsContainer.innerHTML += createHtml(id, name, gender);
  }
};

createList();

//TODO Call an eventListener on the button element
buttonHtmlElement.addEventListener('click', generateList);