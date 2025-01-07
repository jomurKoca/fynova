import React from 'react'
import CategorySection from './CategorySection';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return ( 
    <section className="flex flex-col items-center justify-center text-center mt-10 py-6">

      <div>
        <h1 className="text-4xl font-extrabold mb-4" style={{color:'#002855'}}> Komplett einfach. Einfach komplett. </h1>
        <p className="text-lg mb-6 max-w-4xl">
          Lehn dich entspannt zurück und bestelle alles, was du brauchst, wann du es brauchst. <i>Fynova</i> ist dein Lebensmittel Lieferservice: 
          Klicke dich durch unser vielfältiges Sortiment und wir bringen dir deinen Einkauf ganz einfach nach Hause.
        </p>
      </div>
      <CategorySection />
      <Button className="mt-2 w-64 p-6 font-bold " style={{backgroundColor:'#e2186f' }}> Sortiment entdecken </Button>
        
    </section>
  );
}
