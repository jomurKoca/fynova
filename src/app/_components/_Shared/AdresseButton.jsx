'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import AdresseDialog from './AdresseDialog';

export default function AdresseButton() {
  const [isAutoOpen, setIsAutoOpen] = useState(true); // 5 saniyelik popover için
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog için state

  // 5 saniyelik otomatik popover kontrolü
  useEffect(() => {
    const timer = setTimeout(() => setIsAutoOpen(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 5 saniye açık kalan popover */}
      <Popover open={isAutoOpen} onOpenChange={setIsAutoOpen}>
        <PopoverTrigger asChild>
          <Button
          onClick={() => setIsDialogOpen(true)} // Dialog'u açmak için
            style={{ outline: 'none', boxShadow: 'none' }}
            className="p-6 w-auto rounded-3xl font-bold text-[#e2186f] bg-[#fde9f1] hover:bg-transparent"
          >
            Gib hier deine Lieferadresse ein
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="center"
          className="bg-[#002855] text-white p-4 shadow-lg/"
        >
          <p>Liefern wir bei dir? Jetzt Adresse eingeben & überprüfen. 🏠</p>
        </PopoverContent>
      </Popover>
       {/* Dialog tetiklenmesi */}
       <AdresseDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
