import { useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { debounce } from "lodash";

export const useFilter = (items) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialSearchTerm =
    new URLSearchParams(location.search).get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    const debouncedUpdateURL = debounce((newSearchTerm) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("search", newSearchTerm);
      navigate(`?${searchParams.toString()}`, { replace: true });
    }, 300);

    debouncedUpdateURL(searchTerm);
  }, [searchTerm, navigate, location.search]);

  const filteredItems = useMemo(() => {
    return items.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return { filteredItems, searchTerm, handleSearchChange };
};
