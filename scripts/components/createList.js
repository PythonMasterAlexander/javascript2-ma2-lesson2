export const createList = function(item) {
  let listHtml = "";

  listHtml = `
    <li class="list__item">${item}</li>
  `;
  return listHtml;
};