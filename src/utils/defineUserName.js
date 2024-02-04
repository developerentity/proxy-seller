export const defineUserName = (array, id) => {
  const user = array.find((user) => user.id === parseInt(id, 10));
  return user?.username;
};
