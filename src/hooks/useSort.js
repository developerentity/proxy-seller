import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useSort = (items) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialSortOrder = new URLSearchParams(location.search).get("sort");
  const [sortOrder, setSortOrder] = useState(initialSortOrder);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (sortOrder) {
      searchParams.set("sort", sortOrder);
    } else {
      searchParams.delete("sort");
    }
    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [sortOrder, navigate, location.search]);

  const sortedItems = useMemo(() => {
    if (!sortOrder) return items;

    return [...items].sort((a, b) => {
      if (sortOrder === "asc") return a.username.localeCompare(b.username);
      else return b.username.localeCompare(a.username);
    });
  }, [items, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) =>
      prevOrder === "asc" ? "desc" : prevOrder === "desc" ? null : "asc"
    );
  };

  return { sortedItems, sortOrder, toggleSortOrder };
};
