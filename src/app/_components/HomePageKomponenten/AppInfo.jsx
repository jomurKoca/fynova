import React from 'react';

export default function AppInfo() {                    {/* */}
  return (
        <section className="flex flex-col sm:flex-row items-center justify-between"> 
            <div className="flex flex-col sm:items-center sm:w-1/2 sm:text-center mx-8 space-y-4">
                <div>
                    <h1 className="sm:text-4xl text-2xl text-center font-extrabold mb-4" style={{color:'#002855'}}>
                        Vit vat hoch , schäi war's doch! Vit vat Hennadreck, unser ganzes Geld ist weg!
                    </h1>
                    <p className="text-lg mb-4 text-center" style={{color:'#002855'}}>
                    Bestelle deine Lieblingsprodukte mühelos mit der App. Jetzt! <strong><i> Fynova'</i></strong> App downloaden.
                    </p>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 ml-4">
                    <div className="mb-4">
                        <a
                            href="https://apps.apple.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                            src="/fotos/AppleIcon.svg"
                            alt="appleicon"
                            className="h-12 max-w-64"
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                            src="/fotos/PlayStore.png"
                            alt="playstoreapp"
                            className="h-12 w-36"
                            />
                        </a>
                    </div>
                </div>
                
            </div>

            <div className="sm:w-1/2  flex justify-end my-20 mx-20">
                <img src="/fotos/20.jpg" alt="app" className="max-w-full rounded-lg" />
            </div>
        </section>
    );
}
{/*  
1- flex-col dient dazu, dass die Elemente in einer Spalte angeordnet werden.
2- sm:flex-row bedeutet, dass die Element in einer Reihe angeordnet werden, wenn die Bildschirmgröße mindestens sm beträgt.
3- items-center zentriert die Elemente vertikal.
4- justify-between verteilt die Elemente horizontal gleichmäßig.
5- sm-items-center zentriert die Elemente vertikal, wenn die Bildschirmgröße mindestens sm beträgt.
6- sm:w-1/2 bedeutet, dass das Element die Hälfte der Breite des Bildschirms einnimmt, wenn die Bildschirmgröße mindestens sm beträgt.
7- sm:text-center zentriert den Text horizontal, wenn die Bildschirmgröße mindestens sm beträgt.
8- mx-8 fügt horizontal einen Abstand von 2rem hinzu.
9- space-y-4 fügt vertikal einen Abstand von 1rem hinzu.
10- sm:text-4xl setzt die Schriftgröße auf 2.25rem, wenn die Bildschirmgröße mindestens sm beträgt.
11- text-center zentriert den Text horizontal.
12- font-extrabold setzt die Schrift auf fett.
13- mb-4 fügt unten einen Abstand von 1rem hinzu.
14- text-lg setzt die Schriftgröße auf 1.125rem.
15- sm:flex-col dient dazu, dass die Elemente in einer Spalte angeordnet werden, wenn die Bildschirmgröße mindestens sm beträgt.
16- flex-row dient dazu, dass die Elemente in einer Reihe angeordnet werden.
17- gap-2 fügt horizontal einen Abstand von 0.5rem hinzu.
18- ml-10 fügt links einen Abstand von 2.5rem hinzu.
19- mb-4 fügt unten einen Abstand von 1rem hinzu.
20- _blank öffnet den Link in einem neuen Tab.
21- rel="noopener noreferrer" stellt sicher, dass der Link sicher ist.
22- w-36 setzt die Breite auf 9rem.
23- sm:w-1/2 bedeutet, dass das Element die Hälfte der Breite des Bildschirms einnimmt, wenn die Bildschirmgröße mindestens sm beträgt.
24- flex dient dazu, dass die Elemente in einer Reihe angeordnet werden.
25- justify-end zentriert die Elemente horizontal rechts.
26- max-w-full setzt die maximale Breite auf 100%.
27- rounded-lg setzt die Ecken auf 0.5rem.
*/}
