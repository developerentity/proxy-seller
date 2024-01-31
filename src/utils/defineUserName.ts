import { IUser } from "../interfaces/interfaces";

export const defineUserName = (array: Array<IUser>, id: string) => {
  const user = array.find((user) => user.id === parseInt(id, 10));
  return user?.username;
};
