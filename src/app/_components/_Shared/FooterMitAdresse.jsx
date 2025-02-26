'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import AdresseDialog from './AdresseDialog';

export default function FooterMitAdresse() {
  const [showAdresseDialog, setShowAdresseDialog] = useState(false); // Durum değişkeni oluşturuldu. Ilk durumda kapali

  const handleButtonClick = () => {
    setShowAdresseDialog(true); // Butona tıklandığında dialog açılır yani false durumu true yapılır
  };

  const handleCloseDialog = () => {
    setShowAdresseDialog(false); // Dialog kapatıldığında durum güncellenir
  };

  return (
    <div className="fixed sm:bottom-0 bottom-14 w-full flex items-center bg-slate-100 rounded-lg p-4 cursor-pointer">
      <img className="max-h-20" src="/fotos/footermap.png" alt="map" />
      <p className="hidden sm:flex text-[#002855] font-sm ml-4">
        Gib deine Adresse ein, um Produkte in deiner Nähe zu sehen
      </p>
      <Button
        className="ml-auto bg-[#002855] rounded-3xl text-white hover:bg-[#e2186f]"
        onClick={handleButtonClick} // Butona tıklama olayı eklendi
      >
        Adresse hinzufügen
      </Button>
      <AdresseDialog open={showAdresseDialog} onOpenChange={handleCloseDialog} /> {/* Dialog bileşeni eklendi */}
    </div>
  );
}
{/*
1- showAdresseDialog ist ein Zustandsvariable, die den Status des Dialogs speichert. Der Dialog ist standardmäßig geschlossen bzw false.
2- setShowAdresseDialog ist eine Funktion, die den Status des Dialogs ändert. Wenn der Button geklickt wird, wird der Dialog geöffnet, also wird der Status auf true gesetzt.
3- handleButtonClick ist eine Funktion, die aufgerufen wird, wenn der Button geklickt wird. Es ändert den Status des Dialogs auf true.
4- handleCloseDialog ist eine Funktion, die aufgerufen wird, wenn der Dialog geschlossen wird. Es ändert den Status des Dialogs auf false.
5- Der Button hat einen onClick-Handler, der handleButtonClick-Funktion aufruft, wenn der Button geklickt wird.
6- Der AdresseDialog-Komponente wird gezeigt, wenn showAdresseDialog true ist. Die onOpenChange-Prop wird verwendet, 
um handleCloseDialog-Funktion zu übergeben, die aufgerufen wird, wenn der Dialog geschlossen wird.
7- Wenn der Button geklickt wird,wird handleButtonClick-Funktion aufgerufen, die den Status des Dialogs auf true setzt.
8- Wenn der Dialog geschlossen wird, wird handleCloseDialog-Funktion aufgerufen, die den Status des Dialogs auf false setzt.
9- Die Komponente wird in /Shop/layout.jsx importiert und gerendert.
*/}