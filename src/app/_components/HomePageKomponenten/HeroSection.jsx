import React from 'react' // import React from 'react' ist in React 17+ nicht mehr erforderlich
import CategorySection from '../_Shared/CategorySection'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return ( 
    <section className="flex flex-col items-center justify-center text-center mt-10 mb-20 py-6">

      <div>
        <h1 className="text-4xl font-extrabold mb-4" style={{color:'#002855'}}> Völlig unkompliziert, Total simpel </h1>
        <p className="text-lg mb-6 max-w-4xl">
        Lehn dich entspannt zurück und bestelle genau das, was du brauchst – jederzeit. <strong><i>Fynova'</i></strong> ist dein Lebensmittel-Lieferservice:
        Entdecke unser vielfältiges Sortiment und lass dir deinen Einkauf bequem nach Hause liefern.
        </p>
      </div>
      <CategorySection />
      <Link href="/Shop">
        <Button className=" w-64 p-6 font-bold bg-[#e2186f] hover:bg-[#002855] border-none"> 
          Sortiment entdecken 
        </Button>
      </Link>
    </section>
  );
}
{/* 
1-import CategorySection from '../_Shared/CategorySection'; importiert die CategorySection-Komponente, die in der HeroSection-Komponente verwendet wird.
2-import { Button } from '@/components/ui/button'; importiert die Button-Komponente aus dem UI-Ordner, die in der HeroSection-Komponente verwendet wird.
3-import Link from 'next/link'; importiert die Link-Komponente von Next.js, die verwendet wird, um auf die Shop-Seite zu verlinken.
4-Functional Components sind eine Möglichkeit, Komponenten in React zu definieren. Sie sind einfache JavaScript-Funktionen, die JSX zurückgeben.
5-HeroSection ist eine Funktion, die eine React-Komponente definiert. Diese Komponente rendert den Hero-Bereich der Startseite.
6-flex dient dazu, die Elemente in einer Zeile anzuordnen. flex-col ordnet die Elemente in einer Spalte an.
7-items-center zentriert die Elemente horizontal. justify-center zentriert die Elemente vertikal.
8-text-center zentriert den Text innerhalb des Bereichs.
9-mt-10 und mb-20 fügen oben und unten Abstand hinzu.
10-py-6 fügt vertikalen Padding hinzu.
11-Der Hero-Bereich enthält eine Überschrift, einen Text und eine Schaltfläche zum Entdecken des Sortiments und CategorySection.
12-CategorieSection wird aus einer separaten Komponente importiert und gerendert, um die Kategorien anzuzeigen.
13-Die Schaltfläche "Sortiment entdecken" wird gerendert und mit einem Link zur Shop-Seite versehen.
14-Die Verwendung von Link aus Next.js ermöglicht es, auf die Shop-Seite zu verlinken, ohne die Seite neu zu laden.
15- text-4xl und text-lg sind Klassen, die die Textgröße festlegen.
16-font-extrabold und font-bold sind Klassen, die die Schriftart festlegen.
17-max-w-4xl ist eine Klasse, die die maximale Breite des Textes auf 4xl festlegt.
18- mb-4 und mb-6 fügen oben und unten Abstand hinzu.
19- style={{color:'#002855'}} setzt die Textfarbe auf #002855. Dies kann auch in einer CSS-Datei definiert werden.
20- Inline-Style (style={{...}}) ermöglicht es, das Styling direkt in der Komponente zu definieren.
21-Die Verwendung von <i>Fynova</i> fügt den Text "Fynova" kursiv hinzu.
22-Link wird verwendet, um auf die Shop-Seite zu verlinken. Der href-Attribut gibt die URL der Shop-Seite an.
*/}
