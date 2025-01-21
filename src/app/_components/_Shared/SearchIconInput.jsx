'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function SearchIconInput() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center">
      {/* Search Icon */}
      <button
        onClick={toggleSearch}
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none cursor-text"
        aria-label="Search"
      >
        <Search className="w-6 h-6 text-gray-600 " />
      </button>

      {/* Search Input */}
      {isOpen && (
        <input
          type="text"
          placeholder="Suche.."
          className="absolute top-0 right-0 w-64 p-2 border rounded-md shadow-lg focus:outline-none"
        />
      )}
    </div>
  );
}
