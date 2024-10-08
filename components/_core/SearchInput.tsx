"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchIcon = () => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9166 11.4167L9.35884 8.85431L11.9166 11.4167ZM10.7763 5.42983C10.7763 6.7152 10.2657 7.94793 9.35679 8.85682C8.4479 9.76571 7.21517 10.2763 5.9298 10.2763C4.64443 10.2763 3.41171 9.76571 2.50282 8.85682C1.59392 7.94793 1.08331 6.7152 1.08331 5.42983C1.08331 4.14447 1.59392 2.91174 2.50282 2.00285C3.41171 1.09395 4.64443 0.583344 5.9298 0.583344C7.21517 0.583344 8.4479 1.09395 9.35679 2.00285C10.2657 2.91174 10.7763 4.14447 10.7763 5.42983V5.42983Z"
        stroke="#ABABAB"
        strokeWidth="1.14035"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-3 px-3 min-h-[44px] bg-primary rounded-lg">
        <SearchIcon />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search here..."
          className="bg-transparent outline-none flex-1 text-white text-xs"
        />
      </div>
    </form>
  );
};

export default SearchInput;
