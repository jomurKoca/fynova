import { Button } from '@/components/ui/button'
import React from 'react'

export default function StaffSection() {
  return (
    <section className="w-full bg-[#002855] mt-20 mb-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src="/fotos/19.jpg" alt="rider" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center p-10 text-center items-center mx-16 mb-20">
          <h1 className="text-white font-extrabold text-4xl mb-10">
            Werde Rider bei uns
          </h1>
          <p className="text-white text-2xl mb-10">
            Profitiere von einem attraktiven Stundenlohn mit Trinkgeld, 
            Rabatt auf jeden Einkauf, gratis Ausrüstung, Telefonvergütung, 
            Bonusmöglichkeiten und vielem mehr.
          </p>
          <Button className="font-bold w-48 bg-[#e2186f] p-6">
            Jetzt durchstarten
          </Button>
        </div>
      </div>
    </section>
  );
}
