//This function adds value to localStorage in the browser
export const listKey = 'list';
export const saveInLocalStorage = function(value) {
  //Use JSON.stringify() to turn the value into a string
  localStorage.setItem(listKey, JSON.stringify(value));
};