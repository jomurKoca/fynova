import React from 'react' // import React ist nicht mehr nötig seit React 17. ich schreibe es nur um es zu 
import { ShoppingBasket } from 'lucide-react';
import { BadgeEuro, Grape, AlarmClockPlus, EarthLock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DieSteadte from '../_Shared/DieSteadte';
import Link from 'next/link'; 

export default function InfoSection() {
    return (
        <section className="mt-20">
            
            <div className="flex justify-center text-center">
                <h1 className="text-4xl font-extrabold" style={{color:'#002855'}}>
                Valide Gründe, die für <strong><i>Fynova'</i></strong> sprechen.
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-10 mx-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <ShoppingBasket size={80} color="#e2186f" strokeWidth={1}/>
                    <h2 style={{color:'#002855'}} className="font-bold text-center">Täglich frische Produkte</h2>
                    <p className="text-center">Erkunde 2900+ Favoriten und essentielle Produkte von Fynova', mit täglichen Neuzugängen!</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <AlarmClockPlus size={80} color="#e2186f" strokeWidth={1} />
                    <h2 style={{color:'#002855'}} className="font-bold">Die schnellsten Lieferungen in der City</h2>
                    <p>Unsere Lieferfahrer sorgen dafür, dass deine Einkäufe in Minuten schnell und entspannt ankommen.</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <Grape size={80} color="#e2186f" strokeWidth={1} />
                    <h2 style={{color:'#002855'}} className="font-bold">Frische-Garantie</h2>
                    <p>Wir setzen auf höchste Qualitätsstandards. Wenn du nicht frische Ware erhältst, ist sie kostenlos!</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <BadgeEuro size={80} color="#e2186f" strokeWidth={1} />
                    <h2 style={{color:'#002855'}} className="font-bold ">Ständige Preisnachlässe</h2>
                    <p>Sichere dir bares Geld bei jedem Einkauf mit täglichen Angeboten, Spar-Bundles und unserem umfangreichen 'Dauergünstig'-Sortiment.</p>
                </div>

            </div>
            
            <div className="flex justify-center mb-40">
                <Link href="/Shop">
                    <Button className="font-bold px-10 py-5 hover:text-[#002855]" style={{backgroundColor:'#e2186f'}}>
                        Jetzt einkaufen
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center px-10 sm:px-64">
                <div className="flex flex-col items-center justify-center text-center">
                    
                    <h1 className="text-4xl font-extrabold mb-5" style={{color:'#002855'}}>
                    Bestellung in Sekunden. Lieferung in Minuten.
                    </h1>
                    <p>
                        <strong><i>Fynova'</i></strong>liefert schon in mehr als 99 Städten. Deine Stadt ist nicht dabei? Melde dich an, um auf dem Laufenden zu bleiben!
                    </p>
                    <Link href="/Shop">
                        <Button className="font-bold mt-10 hover:text-[#002855]" style={{backgroundColor:'#e2186f'}}>Meine Adresse überprüfen</Button>
                    </Link>
                </div>
                
                <div className="mt-10 sm:mt-0">
                    <img 
                    src="/fotos/17.png" 
                    alt="Earth" 
                    className="rounded-lg h-auto"/>
                </div>
            </div>

            <div className="mt-20">
                <Link href="/Shop">
                <DieSteadte />
                </Link>
            </div>


            
        </section> 
    );
}
{/*
1-Lucide ist eine Bibliothek von SVG-Icons, die ich in meinem Projekt verwende.
2-ShoppingBasket, BadgeEuro, Grape, AlarmClockPlus, EarthLock sind Icons von Lucide.
3-DieSteadte ist eine Komponente, die ich in dieser InfoSection-Komponente verwende.
4-Wir werden Link aus next/link verwenden, um die Benutzer zu einer anderen Seite zu führen bzw. Navigationen zu ermöglichen.
5- Infosection ist eine Komponente, die die Hauptinformationen über die Website enthält. Diese Komponente besteht aus mehreren Abschnitten.
6- Grid-System & Spalten-Anordnung
Grid ist ein CSS-Layout-Modul, das eine 2D-Gitterstruktur für Inhalte bereitstellt. Es ist ein zweidimensionales System, das sowohl Spalten als auch Zeilen unterstützt.
grid :Aktiviert das CSS Grid-Layout für das div, sodass Inhalte in einem Raster angeordnet werden.
grid-cols-1 : Standardmäßig (auf kleinen Bildschirmen) hat das Grid eine Spalte.
sm:grid-cols-2 : Ab der sm-Breakpoint (kleine Bildschirme, ab 640px) werden zwei Spalten genutzt.
lg:grid-cols-4 : Ab der lg-Breakpoint (große Bildschirme, ab 1024px) werden vier Spalten genutzt.
7- gap-5 :Fügt zwischen den Grid-Elementen einen Abstand von 1.25rem (20px) hinzu.
mt-10 : Fügt oben (margin-top) 2.5rem (40px) Abstand hinzu.
mb-10 : Fügt unten (margin-bottom) 2.5rem (40px) Abstand hinzu.
mx-10 : Fügt links & rechts (margin-left & margin-right) jeweils 2.5rem (40px) Abstand hinzu.
8- StrokeWidth: Die Dicke der Linie, die das Symbol darstellt. StrokeWidth ist eine Eigenschaft von Lucide-Icons.
*/}