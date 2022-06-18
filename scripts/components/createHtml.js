//TODO Create one function. One for creating html to use in the generating function
export const createHtml = function(id, name, gender) {
  let html = "";

  html = `
    <li>
      <h2>${name}</h2>
      <span>${gender}</span>
      <span>${id}</span>
    </li>
  `;

  return html;
};