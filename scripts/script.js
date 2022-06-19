import { inputHtmlElement, buttonHtmlElement, orderedListElement } from "./constants/constants.js";

let lengthOfInputValue = 3;
let listItemStorage = [];

const generateListFromInput = function() {
  const valueInInput = inputHtmlElement.value.trim();

  if(valueInInput.length >= lengthOfInputValue) {
    listItemStorage.push(valueInInput);
    createList();

    inputHtmlElement.value = "";
    inputHtmlElement.focus();
  }
};

const createList = function() {
  orderedListElement.innerHTML = "";

  for(let i = 0; i < listItemStorage.length; i++) {
    let listItem = listItemStorage[i];

    orderedListElement.innerHTML += `
      <li>
        <span class="list__item">${listItem}</span>
        <i class="fa-solid fa-trash" data-item="${listItem}"></i>
      </li>
    `;
  }

  const listItems = document.querySelectorAll('.list__item');
  for(let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];

    listItem.addEventListener('click', addClass);
  }

  const trashBins = document.querySelectorAll('.fa-solid');
  for(let i = 0; i < trashBins.length; i++) {
    const trashBin = trashBins[i];

    trashBin.addEventListener('click', removeItemInList);
  }
};

const addClass = function() {
  event.target.classList.toggle('complete');
};

const removeItemInList = function() {
  const listItemToDelete = event.target.dataset.item;

  const outputNewList = listItemStorage.filter(function(listItem) {
    if(listItemToDelete !== listItem) {
      return true;
    }
  });

  listItemStorage = outputNewList;
  createList();
};

const saveToLocalStorage = function() {
};

const getListItemsFromLocalStorage = function() {
};

buttonHtmlElement.addEventListener('click', generateListFromInput);