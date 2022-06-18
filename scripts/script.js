import { buttonHtmlElement } from "./constants/constants.js";
import generateListFromInputValue from "./components/generateListFromInputValue.js";

buttonHtmlElement.addEventListener('click', generateListFromInputValue);