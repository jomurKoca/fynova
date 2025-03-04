import Link from "next/link";  // Import Link from next/link ermöglicht das Verlinken von Seiten ohne das die Seite neu geladen wird
import { Button } from "@/components/ui/button";

export default function HomeBanner() {
    return ( 
        <section className="flex flex-col sm:flex-row justify-center items-center sm:items-center h-auto sm:py-20 py-10" style={{ backgroundColor: '#fcb2d3'}}>
            
            <div className="mx-20" style={{width:'420px'}}>
                <h1 className="px-5 text-4xl sm:text-4xl mb-20 font-extrabold leading-tight" style={{ color: '#e2186f'}}>
                    <strong><i>Fynova'</i></strong>
                </h1>
                <h1 className="text-center sm:text-left px-5 text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: '#002855' }}>
                    Deine Lebensmittel, sofort geliefert
                </h1>
                <p className="text-center sm:text-left px-5 mt-4 text-lg sm:text-xl" style={{ color: '#002855'}}>
                    Ein kompletter Supermarkt in einer App. So einfach bestellst du deine Lebensmittel online.  <strong><i>Fynova'</i></strong> bringt Supermarkt-Produkte direkt zu dir nach Hause – von Apfel bis Zimt.
                    In wenigen Minuten. Bis an deine Tür.
                </p>
                <Link href="/Shop">
                    <div className="flex justify-center mt-6">
                        <Button  className="w-72 font-bold py-3 px-6 rounded-lg shadow-md hover:text-[#002855] hover:bg-white border-none bg-[#e2186f]">
                            Jetzt einkaufen
                        </Button>
                    </div>
                </Link>
                
            </div>
            <div className="mt-10 sm:mt-0 ">
                <img 
                    src="/fotos/bannerbild3.jpg" 
                    alt="Supermarkt-Produkte" 
                    className="rounded-lg shadow-lg max-w-full h-auto"
                    style={{ maxWidth: '400px' }}
                />
            </div>
            
        </section>
    );
}
{/*
1-Link ermöglicht das Verlinken von Seiten ohne das die Seite neu geladen wird
2-Funcition HomeBanner wird erstellt und exportiert damit sie in anderen Dateien importiert werden kann
3- h-auto wird für die Höhe des Banners verwendet
4- sm:py-20 py-10 dient dazu, dass der Banner auf großen Bildschirmen mehr padding hat als auf kleinen
5- sm:text-left ermöglicht das zentrieren des Textes auf kleinen Bildschirmen und das linksbündige auf großen Bildschirmen.
6- flex flex-col sm:flex-row wird verwendet um die Elemente in einer Reihe anzuzeigen auf großen Bildschirmen und in einer Spalte auf kleinen Bildschirmen.
7-  items-center sm:items-center wird verwendet um die Elemente in der Mitte der Seite anzuzeigen
8- sm:ml-64 wird verwendet um den Text auf großen Bildschirmen weiter nach rechts zu verschieben
9- width:'420px' wird verwendet um die Breite des Textes auf großen Bildschirmen zu definieren
10- px-5 wird verwendet um den Text auf der linken und rechten Seite zu padden
11- text-4xl sm:text-4xl Erklärung: Diese Klasse definiert die Schriftgröße des Textes auf 4xl, 
was in der Regel einer sehr großen Schriftgröße entspricht (ungefähr 2.25rem oder 36px). Es wird verwendet, um den Text hervorzuheben.
12- mb-20 wird verwendet um den Text von den anderen Elementen zu trennen
13-font-extrabold: Diese Klasse macht den Text extrafett. Es wird verwendet, um den Text besonders hervorzuheben und ihm mehr Gewicht zu verleihen.
14- leading-tight: Diese Klasse definiert den Zeilenabstand des Textes auf tight, was bedeutet, dass der Zeilenabstand kleiner ist als normal.
Diese Klasse reduziert den Zeilenabstand (line-height) des Textes, was bedeutet, dass die Zeilen näher beieinander stehen. 
Dies kann helfen, den Text kompakter und dichter erscheinen zu lassen.
15- h1 wird verwendet um den Text als Überschrift zu definieren
16- p wird verwendet um den Text als Absatz zu definieren
17- text-center sm:text-left wird verwendet um den Text in der Mitte der Seite anzuzeigen auf kleinen Bildschirmen und linksbündig auf großen Bildschirmen.
18 - px -5 wird verwendet um den Text auf der linken und rechten Seite zu padden
19- flex justify-center mt-6 wird verwendet um den Button in der Mitte der Seite anzuzeigen
20- rounded-lg shadow-md wird verwendet um den Button abzurunden und einen Schatten zu geben
*/}
  