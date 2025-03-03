import { Button } from "@/components/ui/button"; 
import Link from "next/link";


export default function Header() {
    return (
        <div className="bg-[#002855] h-16 flex justify-between items-center px-4 sm:flex-row sm:text-left"> 
            <div className="text-white sm:ml-20">
                Bei <strong><i>Fynova'</i></strong> bestellen und Rabatt sichern
            </div>
            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-3xl h-12 px-8 text-[#002855] font-extrabold sm:mr-24 hover:bg-[#f4f7fa]"> 
                App laden 
            </Button>
            </Link>
        </div>
    );
}   

{/*
1- In Tailwind CSS wird jeder Befehl, der in className geschrieben wird, als eine Klasse betrachtet. 
Tailwind CSS ist ein Utility-First-CSS-Framework, was bedeutet, dass jede Klasse einen spezifischen Stil oder eine Eigenschaft hinzufügt.
2- In Next.js (React) solltest du className verwenden, da class ein JavaScript-Schlüsselwort ist und in JSX nicht direkt genutzt werden kann.
3-Anstatt benutzerdefiniertes CSS zu schreiben, können wir schnell mit Tailwinds vorgefertigten Klassen gestalten.
4- bg-[#002855]: Diese Klasse legt die Hintergrundfarbe fest. Der Hex-Code #002855 repräsentiert ein dunkles Blau. 
Tailwind CSS ermöglicht die Verwendung von benutzerdefinierten Farben; in diesem Fall wird die Hintergrundfarbe mit einem bestimmten Hex-Code festgelegt.
5- h-16: Diese Klasse bestimmt die Höhe. h-16 wird in Tailwind CSS in Einheiten von 4 (normalerweise 1 Einheit = 0,25rem) berechnet. 
Das bedeutet, dass die Höhe von h-16 4 * 16 = 64 Einheiten (16rem) beträgt.
6- flex: Diese Klasse macht das Element zu einem Flex-Container. Flexbox ist ein flexibles Layout-Modell, das die Anordnung von Elementen ermöglicht.
7- justify-between: Diese Klasse zentriert die Elemente horizontal und verteilt sie gleichmäßig auf beiden Seiten des Containers.
8- items-center: Diese Klasse zentriert die Elemente vertikal.
9- px-4: Diese Klasse fügt einen Padding von 1rem (4 Einheiten) hinzu. px-4 fügt Padding (Innenbestand) sowohl auf der linken als auch auf der rechten Seite hinzu.
10- sm:flex-row: Diese Klasse legt das Layout für Bildschirme mit einer Breite von mindestens 640px auf eine Zeile fest.
11 - sm:text-left: Diese Klasse legt den Text für Bildschirme mit einer Breite von mindestens 640px auf der linken Seite fest.
12- text-white: Diese Klasse legt die Textfarbe auf Weiß fest.
13- sm:ml-20: Diese Klasse legt den linken Margin auf 5rem (20 Einheiten) für Bildschirme mit einer Breite von mindestens 640px fest.   
14- Bei <strong><i>Fynova</i></strong> bestellen und Rabatt sichern: Dies ist der Text, der im Header angezeigt wird.
15- Button: Dies ist ein benutzerdefinierter Button, der in der Button-Komponente definiert ist.
16- variant="outline": Dies ist eine benutzerdefinierte Eigenschaft, die in der Button-Komponente definiert ist.
17- rounded-3xl: Diese Klasse fügt abgerundete Ecken mit einem Radius von 0,75rem (3 Einheiten) hinzu.
18- h-12: Diese Klasse legt die Höhe auf 3rem (12 Einheiten) fest.
19- font-extrabold: Diese Klasse legt die Schriftstärke auf extrabold fest.
20- sm:mr-24: Diese Klasse legt den rechten Margin auf 6rem (24 Einheiten) für Bildschirme mit einer Breite von mindestens 640px fest.
21-export default function Header(): Diese Funktion exportiert den Header, damit er in anderen Dateien verwendet werden kann.
22-return (): Diese Funktion gibt das JSX-Element zurück, das im Header gerendert werden soll.
23-default: Dieses Schlüsselwort exportiert die Funktion Header als Standardexport und ermöglicht den Import der Funktion ohne geschweifte Klammern.
24-import { Button } from "@/components/ui/button": Dieser Import holt die Button-Komponente aus dem Button-Modul. 
25-{Button}: Dieses Element rendert die Button-Komponente im Header und wird named exportiert deswegen in geschweifte Klammern gesetzt.
*/}
