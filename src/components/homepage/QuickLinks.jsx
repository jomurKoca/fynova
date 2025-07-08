'use client'
import React from 'react'
import { cities } from '@/constants/cities'

export default function QuickLinks() {
  return (
    <section className="bg-[#fde9f1] py-16">
      <div className=" ml-8 sm:ml-10 grid grid-cols-1 sm:grid-cols-3">
        {cities.map((city) => (
          <div key={city}>
            <a href="/Shop" className="text-[#e2186f] text-s font-medium hover:underline">
              Lebensmittel Lieferservice {city}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
{/*
1- Use client dient dazu dass der Code nur im Browser ausgeführt wird und nicht auf dem Server.
2- Importieren wir React und DieSteadte.
3- Erstellen wir eine Funktion QuickLinks.
4- Die Funktion gibt ein section Element zurück.
5-grid grid-cols-1 sm:grid-cols-3 gibt an, dass die Elemente in einer Spalte auf kleinen Bildschirmen und in 3 Spalten auf größeren Bildschirmen angezeigt werden.
6- {cities.map((City) => ( gibt an, dass wir durch die Städte in der cities-Liste iterieren.}
Dieser Code erstellt eine Liste von Links, die für jede Stadt im cities-Array eine Verknüpfung zur /Shop-Seite mit dem Text "Lebensmittel Lieferservice [Stadt]" enthalten.
7-Key={city} gibt an, dass jede Stadt in der Liste eindeutig ist.
8- <a href="/Shop" gibt an, dass der Link zur /Shop-Seite führt.
9- hover :underline gibt an, dass der Link unterstrichen wird, wenn der Benutzer mit der Maus darüber fährt.
*/}