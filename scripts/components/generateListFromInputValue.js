import { inputHtmlElement } from "../constants/constants.js";
import { createList, listItemsStored } from "./createList.js";
import { saveInLocalStorage, listKey } from "./saveInLocalStorage.js";

const chooseLengthValueOnInputField = 2;

const generateListFromInputValue = function() {
  const inputValue = inputHtmlElement.value.trim();

  if(inputValue.length >= chooseLengthValueOnInputField) {
    listItemsStored.push(inputValue);

    createList();
    saveInLocalStorage(listItemsStored);

    inputHtmlElement.value = "";
    inputHtmlElement.focus();
  }
};

export default generateListFromInputValue;