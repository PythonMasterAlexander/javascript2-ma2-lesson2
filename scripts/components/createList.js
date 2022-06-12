export const createList = function(item) {
  let listHtml = "";

  listHtml = `
    <li>
      <span class="list__item">${item}</span>
      <i class="fa-solid fa-trash"></i>
    </li>
  `;
  return listHtml;
};