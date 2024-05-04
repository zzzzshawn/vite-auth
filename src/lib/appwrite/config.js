import { Account, Client } from "appwrite";

const client = new Client();
const projectId = import.meta.env.VITE_PROJECT_ID
const url = import.meta.env.VITE_APPWRITE_URL

client
  .setEndpoint(url)
  .setProject(projectId);

export const account = new Account(client);

export default client;
