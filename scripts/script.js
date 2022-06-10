import { buttonHtmlElement } from "./constants/constants.js";
import { checkValueOnInput } from "./components/checkValueOnInput.js";

buttonHtmlElement.onclick = checkValueOnInput();