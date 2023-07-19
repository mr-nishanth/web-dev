import { Client, Account, ID, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);

export { client, storage, databases, account, ID };
