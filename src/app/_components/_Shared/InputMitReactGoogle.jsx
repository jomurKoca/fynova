"use client";

import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { Search } from "lucide-react";

export default function InputMitReactGoogle({ onPlaceSelected = () => {} }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // Google Maps API'yi yüklüyoruz 
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // API anahtarını kullan
    libraries: ["places"], // Gerekli kütüphaneleri yükle
  });

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      onPlaceSelected(place);
    }
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);   

    if (value.length >= 3) {
      try {
        const response = await fetch(`/api/autocomplete?query=${value}`); // route.js dosyasina istek gönderiyoruz
        const data = await response.json();
        console.log("API Yanıtı:", data);
      } catch (error) {
        console.error("API Hatası:", error);
      }
    }
  };

  if (!isLoaded) return <p>Loading...</p>; // Eğer API yüklenmediyse, yükleniyor mesajı göster

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#002855]" />
      <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceChanged}>
        <input
          type="text"
          placeholder="Gib hier deine Lieferadresse ein.."
          className="border p-4 pl-10 rounded w-full hover:border-black"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Autocomplete>
    </div>
  );
}