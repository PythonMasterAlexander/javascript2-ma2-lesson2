import { orderedListContainer } from "../constants/constants.js";
import { createHtml } from "./createHtml.js";
import { addClass } from "./addClass.js";

export let listItemsStored = [];

export const createList = function() {
  orderedListContainer.innerHTML = "";

  for(let i = 0; i < listItemsStored.length; i++) {
    const listItem = listItemsStored[i];

    orderedListContainer.innerHTML += createHtml(listItem);
  }

  const listItems = document.querySelectorAll('.list__item');
  for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', addClass);
  }
};