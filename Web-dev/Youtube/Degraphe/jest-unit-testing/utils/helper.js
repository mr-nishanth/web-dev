exports.sum = (a, b) => {
  return a + b;
};

exports.deletedUserById = (array, id) => {
  return array.filter((user) => user.id !== id);
};
