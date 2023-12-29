import React, { useMemo } from "react";
import useFetch from "./useFetch";
import { useSearchParams } from "react-router-dom";

const useFilteredData = (categoryIds) => {
  const [data, error, isLoading] = useFetch(
    "https://api.blog.redberryinternship.ge/api/blogs"
  );

  const [params] = useSearchParams();
  const id = params.get("selectedId");
  const ids =
    Array.isArray(categoryIds) && categoryIds.length > 0
      ? categoryIds
      : id
      ? [id]
      : [];

  const filteredData = useMemo(() => {
    return data.data?.filter((fdat) => {
      return ids.length
        ? !!fdat.categories.find((cat) => ids.includes(cat.id))
        : true;
    });
  }, [data.data, ids]);
  return [filteredData, ids];
};

export default useFilteredData;
