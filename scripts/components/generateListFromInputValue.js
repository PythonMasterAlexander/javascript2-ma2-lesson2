import { inputHtmlElement } from "../constants/constants.js";
import { createList, listItemsStored } from "./createList.js";


const generateListFromInputValue = function() {
  const inputValue = inputHtmlElement.value.trim();

  if(inputValue.length >= 3) {
    listItemsStored.push(inputValue);

    createList();

    inputHtmlElement.value = "";
    inputHtmlElement.focus();
  }
};

export default generateListFromInputValue;