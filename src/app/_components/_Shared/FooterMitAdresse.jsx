'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import AdresseDialog from './AdresseDialog';

export default function FooterMitAdresse() {
  const [showAdresseDialog, setShowAdresseDialog] = useState(false); // Durum değişkeni oluşturuldu

  const handleButtonClick = () => {
    setShowAdresseDialog(true); // Butona tıklandığında dialog açılır
  };

  const handleCloseDialog = () => {
    setShowAdresseDialog(false); // Dialog kapatıldığında durum güncellenir
  };

  return (
    <div className="fixed sm:bottom-0 bottom-14 w-full flex items-center bg-slate-100 rounded-lg p-4">
      <img className="max-h-20" src="/fotos/footermap.png" alt="map" />
      <p className="text-[#002855] font-sm ml-4">
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