//mit react-google-maps bibliothek

"use client"; // Next.js'in server component hatasını önlemek için

import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

export default function InputMitReactGoogle({ onPlaceSelected = () => {}}) { // mit =() => {} ile onPlaceSelected fonksiyonunu bileşene varsayilan geciriyoruz
  const [autocomplete, setAutocomplete] = useState(null);
  
  // Google Maps API'yi yükle
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      onPlaceSelected(place); // Seçilen adresi geri gönder
    }
  };

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceChanged}>
      <input 
        type="text" 
        placeholder="Adresse eingeben..." 
        className="border p-2 rounded w-full"
      />
    </Autocomplete>
  );
}
