const mongoose = require('mongoose');

const dbConnect = async () => {
    const URI = process.env.MONGODB_LOCAL_URI;
    try {
        const result = await mongoose.connect(URI);
        console.log(
            `Connected to host: http://${result.connection.host}:${result.connection.port}/${result.connection.name} `
        );
    } catch (error) {
        console.error(
            `Unable to connect to ${result.connection.host} \n error: ${error}`
        );
        process.exit(1);
    }
};

module.exports = dbConnect;
