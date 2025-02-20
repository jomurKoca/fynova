//mit react-google-maps bibliothek

"use client"; // Next.js'in server component hatasını önlemek için

import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { Search } from "lucide-react";

export default function InputMitReactGoogle({ onPlaceSelected = () => {}}) {      //mit =() => {} ile onPlaceSelected fonksiyonunu bileşene varsayilan olarak geciriyoruz
  const [autocomplete, setAutocomplete] = useState(null);
  
  // Google Maps API'yi yükle
  const { isLoaded } = useJsApiLoader({  //isLoaded: Google Maps API yüklendiyse true, aksi halde false döndürür. (Wenn die Google Maps API geladen wurde, true, andernfalls false (boolean))
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      onPlaceSelected(place); // Seçilen adresi geri gönder
    }
  };

  if (!isLoaded) return <p>Loading...</p>; // Wenn die Google Maps API nicht geladen wurde, wird "Loading..." angezeigt.

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
{/*
  1- @react-google-maps/api ist eine Bibliothek, die uns die Verwendung von Google Maps API in React-Anwendungen erleichtert.
  2- useJsApiLoader hook'u ile Google Maps API'yi yüklüyoruz. ( um die Google Maps API zu laden)
  3- Autocomplate ist eine Komponente für die Adressevervollständigung.
  4- onPlaceSelected : Eine Callback-Funktion, die die ausgewählte Adresse zurückgibt
  und wir haben es als Standardwert festgelegt. ( = () => {} → Setzt eine leere Standardfunktion, falls keine übergeben wird.)
  5- const [autocomplete, setAutocomplete] = useState(null); : autocomplete adında bir state tanımladık ve setAutocomplete adında bir fonksiyon tanımladık.
  6- Der erste Zustand ist null, weil wir die Autocomplete-Instanz erst später gespeichert werden bzw. da Autocomplete erst nach dem Laden der API verfügbar ist.
  7- isLoad ist eine boolesche Variable, die true zurückgibt, wenn die Google Maps API geladen wurde, andernfalls false.
  8- useJsApiloader ist ein Hook, der die Google Maps API lädt.
  9- googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, : Verwendet den API-Schlüssel aus den Umgebungsvariablen.
  10- libraries: ["places"], : Wir haben die Bibliothek "places" hinzugefügt, um die Autocomplete-Funktion zu verwenden.(Lädt die "Places"-Bibliothek für Autovervollständigung.)
  11- handlePlaceChanged : Die Funktion, die aufgerufen wird, wenn eine Adresse ausgewählt wird.
  12- const place = autocomplete.getPlace(); : Die ausgewählte Adresse wird in der Variable "place" gespeichert.
  13- onPlaceSelected(place); : Die ausgewählte Adresse wird an die übergebene Funktion zurückgegeben. (InputMitReactGoogle function)
  14- if (!isLoaded) :Wenn die Google Maps API nicht geladen wurde, wird "Loading..." angezeigt. (Zeigt eine Ladeanzeige an, bis die API geladen ist.)
  15- onload={setAutocomplete} : Autocomplete-Instanz wird in den Zustand gespeichert, wenn sie geladen wird.  
  16- onPlaceChanged={handlePlaceChanged} : Die Funktion handlePlaceChanged wird aufgerufen, wenn eine Adresse ausgewählt wird.  
  17- Siehe route.js für die Verwendung der Google Maps API.
*/}