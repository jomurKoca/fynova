'use client'
import { Button } from '@/components/ui/button'
// import { Kode_Mono } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'
import { cities } from '@/constants/cities'

export default function DieSteadte() {
  const [showMore, setShowMore] = useState(false) // Zustandsvariable bzw. state variable showMore und Funktion setShowMore

  return (
    <div className="flex flex-wrap gap-2 justify-center ">
      {cities.slice(0, showMore ? cities.length : 13).map((city) => (
        <div key={city} className=" justify-center text-center rounded-md border w-full sm:w-48 p-2 mx-2 sm:mx-0 cursor-pointer" style={{backgroundColor:'#f4f7fa' , color:'#002855'}}>
          <Link href="./Shop"> 
            {city}
          </Link>
        </div>
      ))}
      <Button
        onClick={() => setShowMore(!showMore)} // Achtung: Wenn falsch ist dann wird es wahr und UMGEKEHRT !!!
        className=" justify-center text-center font-extrabold rounded-md border w-48 p-5 cursor-pointer bg-white hover:bg-[#f4f7fa]"
        style={{color:'#002855'}}>
        {showMore ? 'Weniger' : 'Mehr'} 
      </Button>
    </div>
  )
}
{/*  
1- Const cities = Array von Städten
2- Array wird außer der Komponente definiert damit es nicht bei jedem Rendern unnötig neu erstellt wird und aus anderen Komponenten aufgerufen und wiederverwendet werden kann!!
3- Cities.slice(0, showMore ? cities.length : 13) => Wenn showMore wahr ist, dann gib alle Städte zurück, sonst gib nur die ersten 13 Städte zurück
4- Button onClick={() => setShowMore(!showMore)} => Wenn der Button geklickt wird, wird setShowMore auf das Gegenteil von showMore gesetzt
5- slice ist eine Methode, die ein Array von einem bestimmten Index bis zu einem anderen Index zurückgibt.
6- map ist eine Methode, die ein Array durchläuft und für jedes Element eine Funktion aufruft, die das Element verarbeitet.
7- key={city} => Jedes Element in einem Array sollte eine eindeutige key-Prop haben, damit React weiß, welches Element geändert, hinzugefügt oder entfer
8- {showMore ? 'Weniger' : 'Mehr'} : Das ist der Inhalt des Buttons. 
Wenn showMore wahr ist, gib 'Weniger' zurück, sonst gib 'Mehr' zurück. Das ist ein ternärer Operator und eine kürzere Schreibweise für eine if-else-Anweisung.
*/}
