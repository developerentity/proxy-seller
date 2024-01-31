import { useMemo, useState } from "react";
import { IUser } from "../interfaces/interfaces";

export const useFilter = (items: Array<IUser>) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return { filteredItems, searchTerm, handleSearchChange };
};
