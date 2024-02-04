import { getDataByUrl } from ".";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchAllUsers = async () => getDataByUrl(`${baseUrl}/users`);

export const fetchAlbumsForCertainUserById = async (userId) =>
  getDataByUrl(`${baseUrl}/users/${userId}/albums/`);

export const fetchPostsForCertainUserById = async (userId) =>
  getDataByUrl(`${baseUrl}/users/${userId}/posts`);
