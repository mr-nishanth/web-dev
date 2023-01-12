// Default export

const student = {
  name: "Nishanth",
  deg: "MCA",
};

//module.exports = student; // { name: 'Nishanth', deg: 'MCA' }

// ===================================
// Named exports
exports.data = student; // { data: { name: 'Nishanth', deg: 'MCA' } }
// after destructure {data} = { name: 'Nishanth', deg: 'MCA' }

//exports.student
