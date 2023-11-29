'use client'
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function NavigateBar({ onSearchChange }) {
  const [currentSearch, setCurrentSearch] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setTimeout(() => {
      onSearchChange(value)
      console.log(value)
    },500)
    setCurrentSearch(value)
  };
  return (
    <div className="flex max-w-screen-md w-screen justify-center mt-6">
      <div className="flex w-full">
        <form onSubmit={(e) => e.preventDefault()} className="relative w-full">
          <input
            className="backdrop-blur-sm w-full p-4 rounded-md border-none bg-white/10 text-white pl-10"
            type="text"
            name="search-input"
            placeholder="Empieza a buscar para ver resultados..."
            value={currentSearch}
            onChange={handleSearchChange}
          />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/3 text-white">
            <FaSearch />
          </div>
        </form>
      </div>
    </div>
  );
}

