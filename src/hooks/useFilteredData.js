import React, { useMemo } from "react";
import useFetch from "./useFetch";
import { useSearchParams } from "react-router-dom";

const useFilteredData = () => {
  const [data, error, isLoading] = useFetch(
    "https://api.blog.redberryinternship.ge/api/blogs"
  );

  const [params] = useSearchParams();
  const id = params.get("selectedId");
  const filteredData = useMemo(() => {
    return data.data?.filter((fdat) => {
      return +id ? !!fdat.categories.find((cat) => cat.id === +id) : true;
    });
  }, [data.data, id]);
  return [filteredData, id];
};

export default useFilteredData;
