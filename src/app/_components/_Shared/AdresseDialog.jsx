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
2- useState-Hook wird importiert, um den zustand des Dialogfensters zu verwalten.
3- Dialog, DialogContent und DialogTitle werden von der Dialog-Komponente importiert. (Sihe src/components/ui/dialog)
4- VisuallyHidden wird von Radix UI importiert, um den Titel des Dialogs für Screenreader unsichtbar zu machen.
5- Search und Navigation werden von Lucide React importiert, um die Icons für die Suche und die Navigation zu verwenden.
6- InputMitReactGoogle wird importiert, um die Adresseingabe zu ermöglichen.
7- AdresseDialog wird als Standard exportiert.
8- AdresseDialog wird mit den Props open und onOpenChange aufgerufen. 
Open ist ein boolescher Wert, der angibt, ob das Dialogfenster geöffnet ist oder nicht. (API Reference von Radix UI)
onOpenChange ist eine Funktion, die aufgerufen wird, wenn sich der Wert von open ändert. (Api Reference von Radix UI)
9- Dialog wird mit den Props open und onOpenChange aufgerufen.
10- DialogContent ist ein Container für den Inhalt des Dialogs.
*/}