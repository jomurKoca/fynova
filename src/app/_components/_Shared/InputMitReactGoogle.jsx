//mit react-google-maps bibliothek

"use client"; // Next.js'in server component hatasını önlemek için

import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { Search } from "lucide-react";

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
    <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#002855]" />
        <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceChanged}>
            <input 
                type="text" 
                placeholder="Gib hier deine Lieferadresse ein.." 
                className="border p-4 pl-10 rounded w-full hover:border-black"
            />
        </Autocomplete>
    </div>
);
}
