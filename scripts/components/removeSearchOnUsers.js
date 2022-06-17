export let users = [
  {
    id: 1,
    name: "Emma",
    gender: "Female"
  },

  {
    id: 2,
    name: "Oscar",
    gender: "Male"
  },

  {
    id: 3,
    name: "Alexis",
    gender: "Female"
  },

  {
    id: 4,
    name: "Adam",
    gender: "Male"
  }
];

//This function I had some problems understanding, try doing it some more times
export const removeSearchOnUsers = function(checkIdAndRemove) {
  const filterIdOnUser = function(user) {
    if(user.id !== checkIdAndRemove) {
      return true;
    }
  };
  
  const newFilteredUsers = users.filter(filterIdOnUser);
  users =  newFilteredUsers;
};