import React from 'react';
import { useState } from "react";
import { Dialog, DialogContent , DialogTitle} from '@/components/ui/dialog';
import { VisuallyHidden  } from '@radix-ui/react-visually-hidden';
//import { Imprima } from 'next/font/google';
import { Search , Navigation } from 'lucide-react';
//import AdresseInput from './AdresseInput';
import InputMitReactGoogle from './InputMitReactGoogle';

export default function AdresseDialog({ open , onOpenChange}) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* inhalt des popups */}
      <DialogContent className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg p-10 sm:p-0 max-w-3xl">
        {/* visuell unkenntlich gemachter Titel*/}
        <VisuallyHidden>
          <DialogTitle>Adresse eingeben</DialogTitle>
        </VisuallyHidden>
        {/* linke Seite */}
        <div className="flex-1 flex-col bg-[#fde9f1] p-6 rounded-l-lg">
          <h2 className="text-[#e2186f] font-extrabold text-2xl">Gib deine Adresse ein</h2>
          <p className="text-sm text-[#e2186f] mt-2">
            Lass dir alle Lieblingsprodukte nach Hause liefern.
          </p>
          <div className="mt-4">
            <img
              src="/fotos/bannerbild3.jpg"
              alt="Einkaufstasche"
              className="w-full h-auto hidden sm:block rounded-lg"
            />
          </div>
        </div>

        {/* Rechte Seite */}
        <div className="flex-1 p-6">
          {/*<AdresseInput /> */}
          <InputMitReactGoogle />
          <div className="hover:cursor-pointer hover:bg-slate-100 p-1">
            <div className="flex items-center gap-2 mt-4 "> 
              <Navigation className=""/>
              <p className="text-[#002855] text-m font-semibold">
                Aktuellen Standort verwenden
              </p>
            </div>
            <p className="text-sm text-[#4a4a4a] mt-2 ml-8">Wir brauchen deine Zustimmung.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
{/*
1- AdresseDialog ist eine Funktion, die es uns ermöglicht, ein Dialogfenster zu erstellen.
*/}