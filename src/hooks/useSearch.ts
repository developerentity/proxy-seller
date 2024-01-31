import { useEffect, useState } from "react";
import { IUser } from "../interfaces/interfaces";

export const useSearch = (usersArr: Array<IUser>, queryStr: string) => {
  const [items, setItems] = useState(usersArr);

  const filterByUsername = (list: Array<IUser>, query: string) => {
    return list.filter((obj) => obj.username.includes(query));
  };

  useEffect(() => {
    const filteredItems = filterByUsername(usersArr, queryStr);
    setItems(filteredItems);
  }, [queryStr]);

  return {
    result: items,
  };
};
