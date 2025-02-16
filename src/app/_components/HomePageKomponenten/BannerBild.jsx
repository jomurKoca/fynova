import React from 'react' // import React from 'react' ist in React 17+ nicht mehr erforderlich
export default function BannerBild() {
  return (
    <section className="w-full h-auto">
      <div> 
      <img src="/fotos/14.jpg" alt="Banner" className="w-full h-auto" />
      </div>
    </section>
  );
}
{/*
1-Früher war es notwendig, `import React from 'react'` in jeder Datei mit JSX zu verwenden, weil JSX in `React.createElement` umgewandelt wurde. Das bedeutet, dass React direkt 
in der Datei referenziert wurde. Beispiel für eine JSX-Komponente: return <section>...</section>;
Babel konvertiert dies zu: return React.createElement('section', null, ...);
Deshalb musste React importiert werden, damit `React.createElement` funktioniert.
Mit React 17+ wurde jedoch eine neue automatische JSX-Transformation eingeführt, sodass `React.createElement` nicht mehr explizit verwendet wird. 
Daher ist `import React from 'react'` in neueren React-Versionen nicht mehr erforderlich.
Falls du eine moderne Umgebung wie Next.js, Vite oder React 17+ verwendest, kannst du `import React from 'react'` entfernen, und der Code wird weiterhin funktionieren.
Falls du jedoch React 16 oder älter verwendest, musst du `import React from 'react' beibehalten, da JSX sonst nicht korrekt interpretiert wird
2-export default function BannerBild() {...} ist eine Funktion, die eine React-Komponente definiert. Diese Komponente rendert ein Bild innerhalb eines Abschnitts (section).
Das Bild wird durch den relativen Pfad "/fotos/14.jpg" referenziert und mit der CSS-Klasse "w-full h-auto" gestylt.
3-Die Funktion BannerBild wird exportiert, damit sie in anderen Dateien importiert und verwendet werden kann.
4-w-full und h-auto sind Klassen, die das Bild auf die volle Breite des übergeordneten Elements (w-full) und die automatische Höhe (h-auto) skalieren.
5-Die Verwendung von relativen Pfaden (z. B. "/fotos/14.jpg") ist eine gängige Praxis, um Bilder in React-Anwendungen zu referenzieren. Der relative Pfad wird relativ zum öffentlichen Verzeichnis des Projekts aufgelöst.
6- Das alt-Attribut wird verwendet, um eine alternative Textbeschreibung des Bildes bereitzustellen. Dies ist wichtig für die Barrierefreiheit und SEO.
7-Die section-Elemente werden häufig verwendet, um Abschnitte einer Webseite zu definieren. In diesem Fall wird das Bild innerhalb eines Abschnitts gerendert.
8-Die Verwendung von div-Tags um das Bild ist optional und kann für zusätzliche Styling- oder Strukturierungszwecke verwendet werden.
9-/fotos/14.jpg ist der relative Pfad zum Bild, das in der Komponente gerendert wird. public/fotos/14.jpg ist der tatsächliche Pfad zum Bild im öffentlichen Verzeichnis des Projekts 
aber in der Regel wird der öffentliche Ordner nicht im Pfad angegeben. 
*/}

