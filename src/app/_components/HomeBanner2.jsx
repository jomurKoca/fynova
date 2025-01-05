import { Card } from '@/components/ui/card';
import React from 'react'
import CategorySection from './CategorySection';

export default function HomeBanner2() {
  return ( 
    <section>
        <div>
            <h1> Komplett einfach. Einfach komplett. </h1>
            <p>
                Lehn dich entspannt zurück und bestelle alles, was du brauchst, wann du es brauchst. Flink ist dein Lebensmittel Lieferservice: 
                Klicke dich durch unser vielfältiges Sortiment und wir bringen dir deinen Einkauf ganz einfach nach Hause.
            </p>
        </div>
        
        <CategorySection />
        
    </section>
  );
}
