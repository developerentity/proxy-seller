import { getDataByUrl } from ".";
import { IAlbum, IPost, IUser } from "../interfaces/interfaces";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchAllUsers = async (): Promise<Array<IUser>> =>
  getDataByUrl(`${baseUrl}/users`);

export const fetchAlbumsForCertainUserById = async (userId: number): Promise<Array<IAlbum>> =>
  getDataByUrl(`${baseUrl}/users/${userId}/albums/`);

export const fetchPostsForCertainUserById = async (userId: number): Promise<Array<IPost>> =>
  getDataByUrl(`${baseUrl}/users/${userId}/posts`);