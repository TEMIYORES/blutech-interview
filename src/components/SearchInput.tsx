import { useState } from "react";
import useSearch from "../hooks/useSearch";

type Props = {};

const SearchInput = (props: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const { refetch } = useSearch(searchInput);

  // Function to be executed when Enter key is pressed
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Run the function here
      refetch();
      // You can call any function you want here
    }
  };
  return (
    <div className="search-input">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        className=""
        placeholder="Search by patients..."
        value={searchInput}
        onKeyDown={handleSearch}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
