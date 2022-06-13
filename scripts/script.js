import checkValueOnInput from "./components/checkValueOnInput.js";
import { buttonHtmlElement } from "./constants/constants.js";
import { addClass } from "./components/addClass.js";

buttonHtmlElement.addEventListener("click", checkValueOnInput);