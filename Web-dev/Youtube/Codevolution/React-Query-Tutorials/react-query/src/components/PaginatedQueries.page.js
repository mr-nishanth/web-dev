import axios from "axios";
import { useState } from "react";

import { useQuery } from "react-query";

// http://localhost:4000/colors?_limit=2&page=2
const fetchColors = (pageNumber) => {
  return axios.get(
    `http://localhost:4000/colors/?_limit=2&_page=${pageNumber}`
  );
};
const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    isLoading,
    isFetching,
    isError,
    error,
    data: colors,
  } = useQuery(["colors", pageNumber], () => fetchColors(pageNumber), {
    keepPreviousData: true,
  });
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) return <h2>{error.message}</h2>;
  console.log({ colors });
  return (
    <div>
      <h1>PaginatedQueries</h1>
      {colors?.data.map((color) => {
        return (
          <div key={color.id}>
            <h3>
              ID : {color.id} | Color : {color.label}
            </h3>
          </div>
        );
      })}
      <div>
        <button
          type="button"
          onClick={() => setPageNumber((prev) => prev - 1)}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setPageNumber((prev) => prev + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>
      {isFetching && "Loading..."}
    </div>
  );
};
export default PaginatedQueries;
