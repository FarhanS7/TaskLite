import { useState } from "react";

export const SearchTask = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleClick(event) {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className="w-full">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-50 md:min-w-[380px] lg:min-w-[440px] group-hover:border-gray-600/50 transition-all duration-300">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full bg-transparent px-5 py-3.5 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
            placeholder="Search tasks, tags, or descriptions..."
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleClick(e)}
          />

          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 group"
            onClick={handleClick}
          >
            <svg
              className="h-5 w-5 group-hover:scale-110 transition-transform duration-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          {/* Search suggestions indicator */}
          {searchTerm && (
            <div className="absolute right-14 top-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Enhanced placeholder text on focus */}
        <div className="absolute -top-8 left-0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-gray-400 bg-gray-900/80 px-2 py-1 rounded backdrop-blur-sm">
            Press Enter or click search to find tasks
          </span>
        </div>
      </div>
    </div>
  );
};
