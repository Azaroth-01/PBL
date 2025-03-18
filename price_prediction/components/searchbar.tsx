import React from 'react';
import { Search, X } from 'lucide-react';

// Custom Searchbar component
const Searchbar = () => {
  return (
    <div className="flex items-center w-full relative">
      <div className="absolute left-3 text-gray-400">
        <Search size={18} />
      </div>
      <input 
        type="text"
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-10 bg-transparent border-none rounded-full outline-none text-gray-700 placeholder-gray-400"
      />
      <div className="absolute right-3 text-gray-400 cursor-pointer">
        <X size={16} />
      </div>
    </div>
  );
};

const SearchBoxLayout = () => {
  return (
    <div className="p-12 grid grid-cols-2 gap-10 rounded-2xl bg-gradient-to-br from-gray-100/50 to-black shadow-2xl max-w-4xl mx-auto my-10">
      {/* Featured Search Box (Dark) */}
      
      
      {/* Regular Search Box 1 */}
      <div className="p-5 bg-white/60 rounded-xl shadow-md">
        <h4 className="text-gray-700 mb-3 font-medium">CITY</h4>
        <div className="bg-gray-100 rounded-full border border-gray-200">
          <Searchbar />
        </div>
      </div>
      
      {/* Regular Search Box 2 */}
      <div className="p-5 bg-white/60 rounded-xl shadow-md">
        <h4 className="text-gray-700 mb-3 font-medium">LOCALITY</h4>
        <div className="bg-gray-100 rounded-full border border-gray-200">
          <Searchbar />
        </div>
      </div>
      
      {/* Regular Search Box 3 */}
      <div className="p-5 bg-white/60 rounded-xl shadow-md">
        <h4 className="text-gray-700 mb-3 font-medium">AREA</h4>
        <div className="bg-gray-100 rounded-full border border-gray-200">
          <Searchbar />
        </div>
      </div>
      
      {/* Regular Search Box 4 */}
      <div className="p-5 bg-white/50 rounded-xl shadow-md">
        <h4 className="text-gray-700 mb-3 font-medium">NUMBER OF ROOMS</h4>
        <div className="bg-gray-100 rounded-full border border-gray-200">
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default SearchBoxLayout;