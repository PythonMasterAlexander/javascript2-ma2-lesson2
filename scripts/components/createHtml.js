export const createHtml = function(listItem) {
  let listHtml = "";

  listHtml = `
    <li>
      <span class="list__item">${listItem}</span>
      <i class="fa-solid fa-trash" data-item="${listItem}"></i>
    </li>
  `;
  return listHtml;
};