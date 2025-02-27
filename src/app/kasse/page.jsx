'use client';
// import React, { useState } from "react";
//import AdresseInput from "../_components/_Shared/AdresseInput";
//import InputMitReactGoogle from "../_components/_Shared/InputMitReactGoogle";

import AdresseInput from "../_components/_Shared/AdresseInput";
import KategorieFenster from "../_components/_Shared/KategorieFenster";

export default function Kasse() {
  // const [selectedAddress, setSelectedAddress] = useState("");

  {/*function handleAddressSelect(address) {
    setSelectedAddress(address);
    console.log("Seçilen Adres:", address);       
  */}

  return (
    <div className=" h-screen p-4 flex justify-center">
      {/*<AdresseInput onSelect={handleAddressSelect} />
        {selectedAddress && (
          <p className="mt-2 text-sm text-gray-600">Seçilen Adres: {selectedAddress}</p>
        )} */}
      {/*<InputMitReactGoogle /> */}
    </  div>
  );
}
