const mongoose = require('mongoose');

const validateMongoDbID = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new Error('Invalid MongoDB ID');
    return isValid;
};

module.exports = validateMongoDbID;
