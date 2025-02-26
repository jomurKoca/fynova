'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import AdresseDialog from './AdresseDialog';
import { Navigation } from 'lucide-react';

export default function AdresseButton() {
  const [isAutoOpen, setIsAutoOpen] = useState(false); // 5 saniyelik popover için
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog için state

  // 5 saniyelik otomatik popover kontrolü
  useEffect(() => {
    const timer = setTimeout(() => setIsAutoOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 5 saniye açık kalan popover */}
      <Popover open={isAutoOpen} onOpenChange={setIsAutoOpen}> {/* onOpenChange ile popover acildiktan sonra herhangi biryere tiklanirsa pencerenin kapanmasini sagliyoruz aksi halde acik kaliyor. */}
        <PopoverTrigger asChild>
          <Button
          onClick={() => setIsDialogOpen(true)} 
            style={{ outline: 'none', boxShadow: 'none' }}
            className="p-5 w-auto rounded-3xl font-bold text-[#e2186f] bg-[#fde9f1] hover:bg-transparent"
          >
            <Navigation className="w-6 h-6" />
            Gib hier deine Lieferadresse ein
          </Button>
        </PopoverTrigger> 
        <PopoverContent
          // side="bottom"
          //align="center"
          className="flex justify-center bg-[#002855] text-white p-4 shadow-lg/"
        >
          <p>Liefern wir bei dir? Jetzt Adresse eingeben & überprüfen. 🏠</p> {/* {"\u{1F3E0}"} */}
        </PopoverContent>
      </Popover>
       {/* Dialog tetiklenmesi */}
       <AdresseDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
{/*
1- Use Client dient dazu, dass der Code nur im Browser ausgeführt wird.
2- useState ist ein Hook, der es uns ermöglicht, den Zustand in einer Funktion zu verwenden.
3- useEffect ist ein weiterer Hook, der es uns ermöglicht, Seiteneffekte in Funktionskomponenten zu haben.
4- Hook ist eine spezielle Funktion, die es uns ermöglicht, React-Funktionen zu verwenden. 
5- isAutoOpen ist ein Zustand, der es uns ermöglicht, den Zustand des Popovers zu speichern.
6- setIsAutoOpen ist eine Funktion, die es uns ermöglicht, den Zustand des Popovers zu ändern.
7- timer ist eine Variable, die es uns ermöglicht, den Timer zu speichern. 
8- setTimeout ist eine Funktion, die es uns ermöglicht, eine Funktion nach einer bestimmten Zeit auszuführen.
9- clearTimeout ist eine Funktion, die es uns ermöglicht, den Timer zu löschen.
10- isDialogOpen ist ein Zustand, der es uns ermöglicht, den Zustand des Dialogs zu speichern.
11- setIsDialogOpen ist eine Funktion, die es uns ermöglicht, den Zustand des Dialogs zu ändern.
12- Popover ist ein Komponente, die es uns ermöglicht, ein Popover zu erstellen.
13- PopoverTrigger ist ein Komponente, die es uns ermöglicht, ein PopoverTrigger zu erstellen.
14- Gäbe es keinen asChild, könnte der Trigger den Button nicht direkt verwenden. React würde den Trigger in einem div umschließen. 
Es wird ein zusätzliches <div> innerhalb der Schaltfläche geben, was einige CSS-Stile und Ereignisse brechen kann. 
15- onclick ist ein Ereignis, das ausgelöst wird, wenn auf die Schaltfläche geklickt wird.
16- setIsDialogOpen(true) ist eine Funktion, die es uns ermöglicht, den Dialog zu öffnen.
17-PopoverContent ist ein Komponente, die es uns ermöglicht, den inhalt des Popovers zu erstellen.
18- Ein Dialog ist ein Schnittstellenelement, das dazu dient, eine Nachricht anzuzeigen oder eine Aktion für den Benutzer auszuführen.
Er funktioniert in der Regel als modales Fenster (ein Fenster, das den Zugriff auf den Hintergrundinhalt blockiert, bis es geschlossen wird).
Es wird verwendet, um den Benutzer um eine Bestätigung zu bitten, ein Formular auszufüllen oder Informationen bereitzustellen.
*/}
