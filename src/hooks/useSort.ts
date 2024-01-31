import { useMemo, useState } from "react";
import { IUser } from "../interfaces/interfaces";

type SortOrder = "asc" | "desc" | null;

export const useSort = (items: Array<IUser>) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const sortedItems = useMemo(() => {
    if (!sortOrder) return items;

    const itemsCopy = [...items].sort((a, b) => {
      if (sortOrder === "asc") return a.username.localeCompare(b.username);
      else return b.username.localeCompare(a.username);
    });
    return itemsCopy;
  }, [items, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) =>
      prevOrder === "asc" ? "desc" : prevOrder === "desc" ? null : "asc"
    );
  };

  return { sortedItems, sortOrder, toggleSortOrder };
};
