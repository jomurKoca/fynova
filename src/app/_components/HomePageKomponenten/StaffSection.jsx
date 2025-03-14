import { Button } from '@/components/ui/button'
import React from 'react'

export default function StaffSection() {
  return (
    <section className="w-full bg-[#002855] mt-20 mb-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src="/fotos/19.jpg" alt="rider" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center text-center items-center mx-8 sm:px-48 my-20">
          <h1 className="text-white font-extrabold text-4xl mb-10">
            Schließe dich unserem Rider-Team an!
          </h1>
          <p className="text-white text-2xl mb-10">
          Genieße einen attraktiven Stundenlohn mit Trinkgeld, Rabatte bei jedem Einkauf, kostenlose Ausrüstung, Vergütung für dein Telefon, Bonusoptionen und vieles mehr.
          </p>
          <Button className="font-bold w-48 bg-[#e2186f] p-6 hover:bg-[#e2186f] hover:text-[#002855] border-none">
            Jetzt durchstarten
          </Button>
        </div>
      </div>
    </section>
  );
}
{/* 
1-Button wird aus der Button-Komponente importiert um den Button zu erstellen
2- wf-full wird verwendet um die Breite des Abschnitts auf die gesamte Breite des Bildschirms zu setzen
3- flex-col md:flex-row wird verwendet um die Elemente in einer Spalte auf kleinen Bildschirmen und in einer Reihe auf großen Bildschirmen anzuzeigen
4- md:w-1/2 wird verwendet um die Breite des Bildes auf großen Bildschirmen zu definieren. Es nimmt die Hälfte der Breite des Bildschirms ein.
*/}
