import { inputHtmlElement } from "../constants/constants.js";
import { createList, listItemsStored } from "./createList.js";


export const generateListFromInputValue = function() {
  const inputValue = inputHtmlElement.value.trim();

  if(inputValue.length >= 3) {
    listItemsStored.push(inputValue);

    createList();

    inputHtmlElement.value = "";
    inputHtmlElement.focus();
  }
};