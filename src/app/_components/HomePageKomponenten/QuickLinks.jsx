'use client'
import React from 'react'
import { cities } from '../_Shared/DieSteadte';

export default function QuickLinks() {
  return (
    <section className="bg-[#fde9f1] py-16">
      <div className=" mx-10 grid grid-cols-1 sm:grid-cols-3 ">
        {cities.map((City) => (
          <div key={City}>
            <a href="/Shop" className="text-[#e2186f] text-s font-medium hover:underline">
              Lebensmittel Lieferservice {City}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
