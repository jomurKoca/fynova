// 'use client';
// import React, { useState } from "react";
import AdresseInput from "../_components/_Shared/AdresseInput";

export default function Kasse() {
  // const [selectedAddress, setSelectedAddress] = useState("");

  {/*function handleAddressSelect(address) {
    setSelectedAddress(address);
    console.log("Seçilen Adres:", address);       
  */}

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Kasse</h2>
      {/*<AdresseInput onSelect={handleAddressSelect} />
        {selectedAddress && (
          <p className="mt-2 text-sm text-gray-600">Seçilen Adres: {selectedAddress}</p>
        )} 
       */}
    </  div>
  );
}
