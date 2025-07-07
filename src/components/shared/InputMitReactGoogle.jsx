"use client";

import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { Search } from "lucide-react";

export default function InputMitReactGoogle({ onPlaceSelected = () => {} }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const [inputValue, setInputValue] = useState(""); //String

  // Google Maps API'yi yükle
  const { isLoaded } = useJsApiLoader({ // useJsApiLoader Hook'unu kullanarak Google Maps API'yi yükle.(isLoaded, useJsApiloader tarafından döndürülen bir degiskendir useJsApiLoader ile birlikte gelir.) 
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // API anahtarını kullan
    libraries: ["places"], // Gerekli kütüphaneleri yükle
  });

  const handlePlaceChanged = () => { // Bir yer seçildiğinde çalışacak fonksiyon
    if (autocomplete) { // Eğer autocomplete null değilse
      const place = autocomplete.getPlace();  // Seçilen yeri al place değişkenine ata
      onPlaceSelected(place); // Seçilen yeri onPlaceSelected fonksiyonuna gönder
    }
  };

  const handleInputChange = async (e) => { // Input alanındaki değişiklikleri dinleyen fonksiyon
    const value = e.target.value; // Input alanındaki değeri al ve value değişkenine ata
    setInputValue(value);    // inputValue state'ini güncelle ve input alanındaki değeri kaydet

    if (value.length >= 3) { // Eğer input alanındaki değer en az 3 karakter uzunluğundaysa
      try {
        const response = await fetch(`/api/autocomplete?query=${value}`); // value değerini kullanarak /api/autocomplete endpoint'ine istek gönder
        const data = await response.json(); // API yanıtını JSON formatında çöz ve data değişkenine ata
        console.log("API Yanıtı:", data);
      } catch (error) { // Eğer hata olursa konsola yazdır
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
          value={inputValue} // Bu, input alanındaki değerin inputValue state'i ile senkronize olduğu anlamına gelir.
          onChange={handleInputChange} // Bu prop, input alanına her karakter girildiğinde veya silindiğinde tetiklenir.
        />
      </Autocomplete>
    </div>
  );
}

{/*
  1- useJsApiloader ist ein Hook, der die Google Maps JavaScript API dynamisch lädt.
  2- Autocomplete ist ein React-Komponente, die die Google Maps Places Autocomplete API verwendet.
  3- onPlaceSelected ist eine Funktion, die aufgerufen wird, wenn ein Ort ausgewählt wird und 
  es ist ein Prop, das an die Komponente übergeben wird.
  4-  const [autocomplete, setAutocomplete] = useState(null); ist ein State, der die Autocomplete-Instanz speichert.
  Der erste Wert ist null, weil die Autocomplete-Instanz erst später verfügbar ist.
  5- const [inputValue, setInputValue] = useState(""); ist ein State, der den Wert des Eingabefelds speichert.
  ("") bedeutet, dass der Standardwert leer ist.
  6- const { isLoaded } = useJsApiLoader({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, libraries: ["places"], });
  ist ein Hook, der die Google Maps JavaScript API dynamisch lädt.
  7- handlePlaceChanged ist eine Funktion, die aufgerufen wird, wenn ein Ort ausgewählt wird 
  bzw wenn autocomplete nicht mehr null ist. Es ruft die onPlaceSelected-Funktion auf und übergibt den ausgewählten Ort.
  8- const place = autocomplete.getPlace(); ruft die getPlace-Methode der Autocomplete-Instanz auf, um den ausgewählten Ort zu erhalten.
  9- onPlaceSelected(place); ruft die onPlaceSelected-Funktion auf und übergibt den ausgewählten Ort.
  10- const handleInputChange = async (e) => {: handleInputChange adında bir asenkron fonksiyon tanımlanır. 
  Bu fonksiyon, input alanına yapılan değişiklikleri dinler.
  11-const value = e.target.value;: Input alanındaki değeri alır ve value değişkenine atar.
  12- setInputValue(value);: inputValue state'ini günceller ve input alanındaki değeri kaydeder.
  13- if (value.length >= 3) {: Eğer input alanındaki değer en az 3 karakter uzunluğundaysa, altindaki kod bloğunu çalıştırır.
  14-try {: Hata yakalama bloğunu başlatır. Bu blok içinde hata oluşursa, catch bloğu çalıştırılır.
  15- const response = await fetch(/api/autocomplete?query=${value});: /api/autocomplete endpoint'ine istek gönderir ve query parametresi olarak input değerini kullanır. 
  Bu istek, route.js dosyasına gönderilir.
  16- const data = await response.json();: API yanıtını JSON formatında çözer ve data değişkenine atar.
  17- console.log("API Yanıtı:", data);: API yanıtını konsola yazdırır.
  18- catch (error) {: Hata yakalama bloğu. Eğer try bloğunda hata oluşursa, bu blok çalıştırılır.
  19- Autocomplete bileşeni, Google Maps Places Autocomplete API'sini kullanarak kullanıcıların adres veya yer aramalarını otomatik olarak tamamlamalarını sağlar. 
  Bu bileşen, Google tarafından sağlanır ve React uygulamalarında kullanılabilir.
*/}