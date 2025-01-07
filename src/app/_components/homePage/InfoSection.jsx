import React from 'react'
import { ShoppingBasket } from 'lucide-react';
import { BadgeEuro, Grape, AlarmClockPlus,EarthLock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DieSteadte from './DieSteadte';

export default function InfoSection() {
    return (
        <section className="mt-20">
            <div className="mb-10">
                <div className="flex justify-center text-center">
                        <h1 className="text-4xl font-extrabold" style={{color:'#002855'}}>
                                Gute Gründe für Fynova
                        </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-10 ">
                        <div className="flex flex-col items-center justify-center text-center">
                        <ShoppingBasket size={80} color="#e2186f" strokeWidth={1}/>
                        <h2 style={{color:'#002855'}} className="font-bold text-center">Täglich neue Produkte</h2>
                        <p className="text-center">Entdecke 2600+ Lieblingsprodukte und Essentials von REWE, mit Neuzugängen jeden Tag!</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                        <AlarmClockPlus size={80} color="#e2186f" strokeWidth={1} />
                        <h2 style={{color:'#002855'}} className="font-bold">Die Schnellsten in der City</h2>
                        <p>Unsere Rider liefern deine Einkäufe schnell und stressfrei in Minuten.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                        <Grape size={80} color="#e2186f" strokeWidth={1} />
                        <h2 style={{color:'#002855'}} className="font-bold">Frische-Garantie</h2>
                        <p>Wir vertrauen auf unsere Qualitätsstandards: Was du nicht frisch bekommst, bekommst du umsonst!</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                        <BadgeEuro size={80} color="#e2186f" strokeWidth={1} />
                        <h2 style={{color:'#002855'}} className="font-bold ">Rabatte non-stop</h2>
                        <p>Spar bares Geld bei jedem Einkauf dank täglicher Deals, Spar-Bundles und unserem großen "Dauergünstig" Sortiment.</p>
                        </div>

                </div>
                
                <div className="flex justify-center mb-40">
                <Button className="font-bold px-10 py-5" style={{backgroundColor:'#e2186f'}}>Jetzt einkaufen</Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-">
                    <div className="flex flex-col items-center justify-center text-center max-w-96 sm:ml-40">
                        <h1 className="text-4xl font-extrabold mb-5" style={{color:'#002855'}}>
                            In Sekunden bestellt. In Minuten geliefert. 
                        </h1>
                        <p >
                            <i>Fynova</i> liefert bereits in über 100 Städten. Deine Stadt ist noch nicht dabei? Melde dich an und bleib up-to-date.
                        </p>

                        <Button className="font-bold mt-10" style={{backgroundColor:'#e2186f'}}>Meine Adresse überprüfen</Button>
                    </div>
                    
                    <div className="mt-10 sm:mt-0 sm:ml-10">
                        <img 
                        src="/fotos/17.png" 
                        alt="Supermarkt-Produkte" 
                        className="rounded-lg  max-w-96 h-auto"/>
                    </div>
                </div>

                <div className="mt-20">
                    <DieSteadte />
                </div>


            </div>
        </section> 
    );
}
