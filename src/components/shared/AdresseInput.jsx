// mit FetchApi
'use client';
import React, { useState, useEffect, useRef } from "react";
import { Search } from 'lucide-react';

export default function AdresseInput({ onSelect = () => {}}) { // onSelect fonksiyonunu bilesen geciriyoruz
  
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const suggestionsRef = useRef(null);

  async function fetchAddressSuggestions(query) {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const url = `/api/places?query=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Google API Yanıtı:", data);
      if (data.length > 0) {
        setSuggestions(data.map((place) => place.description));
      } else {
        setSuggestions([]);
      }
    } 
    catch (error) {
      console.error("API Hatası:", error);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputValue(value);
    fetchAddressSuggestions(value);
    setActiveSuggestionIndex(-1);
  }

  function handleSelect(address) {
    setInputValue(address);
    setSuggestions([]);
    onSelect(address);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
      handleSelect(suggestions[activeSuggestionIndex]);
    }
  }

  useEffect(() => {
    if (activeSuggestionIndex >= 0 && suggestionsRef.current) {
      const activeItem = suggestionsRef.current.children[activeSuggestionIndex];
      if (activeItem) {
        activeItem.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeSuggestionIndex]);

  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue" size={24} />
      <input
        type="text"
        placeholder="Gib hier deine Lieferadresse ein"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full text-sm text-[#002855] rounded border hover:border-black focus:outline-none p-5 pl-12"
      />
      {suggestions.length > 0 && (
        <ul
          className="absolute w-full bg-white border border-gray-300 shadow-lg mt-1 rounded"
          ref={suggestionsRef}
        >
          {suggestions.map((address, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer text-[#002855] text-m font-bold hover:bg-gray-100 ${
                index === activeSuggestionIndex ? "bg-gray-200" : ""
              }`}
              onClick={() => handleSelect(address)}
            >
              {address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}