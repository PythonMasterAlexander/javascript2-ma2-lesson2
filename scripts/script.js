import generateListFromInputValue from "./components/generateListFromInputValue.js";
import { removeValueInList, users } from "./components/removeValueInList.js";
import { buttonHtmlElement } from "./constants/constants.js";

buttonHtmlElement.addEventListener('click', generateListFromInputValue);