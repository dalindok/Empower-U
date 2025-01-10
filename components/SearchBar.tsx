import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="flex flex-row gap-2 border-2 rounded-lg border-gray-400 w-96 p-2">
      <BsSearch size={20} className="text-gray-500" />
      <p className="font-extrathin text-base text-gray-500">ស្វែងរកអត្ថបទ</p>
    </div>
  );
};

export default SearchBar;
