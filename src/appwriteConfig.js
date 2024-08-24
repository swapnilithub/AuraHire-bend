import { Client } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66bae69a002db73f2ac4');

export default client;
