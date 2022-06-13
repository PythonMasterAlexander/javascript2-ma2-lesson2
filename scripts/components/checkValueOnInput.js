import { inputHtmlElement, orderedListContainer } from "../constants/constants.js";
import { arrOfAddedListItems } from "../constants/arrOfAddedListItems.js";
import { createList } from "./createList.js";
import { addClass } from "./addClass.js";

const checkValueOnInput = function() {
  let inputFieldStringValue = inputHtmlElement.value.trim();

  orderedListContainer.innerHTML = "";

  if(inputFieldStringValue.length >= 3) {
    arrOfAddedListItems.push(inputFieldStringValue);

    arrOfAddedListItems.forEach(function(listItem) {
      orderedListContainer.innerHTML += createList(listItem);
    });
  }

  const listItems = document.querySelectorAll('.list__item');
  listItems.forEach(function(listItem) {
      
    listItem.addEventListener("click", addClass);
  });

  console.log(arrOfAddedListItems);

  inputHtmlElement.value = ""
  inputHtmlElement.focus();
};

export default checkValueOnInput;