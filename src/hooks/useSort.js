import { useMemo, useState } from "react";

export const useSort = (items) => {
  const [sortOrder, setSortOrder] = useState(null);

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
