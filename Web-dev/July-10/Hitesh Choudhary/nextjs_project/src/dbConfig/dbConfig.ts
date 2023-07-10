import mongoose, { connection } from 'mongoose';

export async function connect() {
    try {
        // await mongoose.connect(process.env.MONGODB_LOCAL_URI!);

        mongoose.connect(process.env.MONGODB_LOCAL_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Mongodb connection established');
        });
        connection.on('error', (err) => {
            console.log('Mongodb connection error : ' + err);
            process.exit();
        });
    } catch (error) {
        console.log('Error connecting : ');
        console.log(error);
    }
}
