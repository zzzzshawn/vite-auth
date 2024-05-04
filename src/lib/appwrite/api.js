import { ID } from "appwrite";
import { account } from "./config";

export const createUser = async (user) => {
  try {
    const newUser = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newUser) throw new Error();

    let session = await loginUser(user);

    if (!session) throw Error;

    // console.log("usr",newUser);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user) => {
  try {
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );
    if (!session) throw Error;

    return session;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    const session = await account.deleteSession("current");
    if (!session) throw Error;

    return session;
  } catch (error) {
    console.log(error);
  }
};
