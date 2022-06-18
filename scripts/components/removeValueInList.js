/*You can also write the same code on one line using a arrow function, this  is not 
very readable too me yet*/
export let users = [
  { id: 1, name: "Emma", gender: "Female" },
  { id: 2, name: "Oscar", gender: "Male" },
  { id: 3, name: "Alexis", gender: "Female" },
  { id: 4, name: "Adam", gender: "Male" },
];

export const removeValueInList = function(valueToRemove) {
  const filteredValue = users.filter(item => item.id !== valueToRemove);  

  users = filteredValue;
};
 
/*
const removeValueInList = function(valueToRemove) {
  const filteredValue = function(user) {
    if(user.id !== valueToRemove) {
      return true;
    }
  }
  const newValue = users.filter(filteredValue);

  users = newValue;
};
*/