exports.sum = (a, b) => {
  return a + b;
};

exports.deletedUserById = (array = [], id = null) => {
  return array.filter((user) => user.id !== id);
};

exports.findUserById = (array = [], id = null) => {
  return array.find((user) => user.id === id);
};
