export const createHtml = function(name, id, gender) {
  let html = "";

  html = `
    <li>
      <h2 data-id="${id}">${name}</h2>
      <span>${gender}</span>
      <span>User id: ${id}</span>
    </li>
  `;

  return html;
}; 