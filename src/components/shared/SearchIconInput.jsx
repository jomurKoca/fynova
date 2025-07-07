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
{/*
1- isOpen ist ein Zustandsvariable, die den Status des Suchfelds speichert. Das Suchfeld ist standardmäßig geschlossen bzw false.
2- setIsOpen ist eine Funktion, die den Status des Suchfelds ändert. Wenn der Button geklickt wird, wird das Suchfeld geöffnet, also wird der Status auf true gesetzt.
3- containerRef ist eine Referenzvariable, die auf das Container-Element verweist.
4- toggleSearch ist eine Funktion, die aufgerufen wird, wenn der Button geklickt wird. Es ändert den Status des Suchfelds auf true oder false.
5- handleClickOutside ist eine Funktion, die aufgerufen wird, wenn außerhalb des Containers geklickt wird. 
Wenn der Container existiert und der Klick außerhalb des Containers erfolgt, wird das Suchfeld geschlossen.
6-
*/}