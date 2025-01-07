'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'


const cities = [
  'Aachen',
  'Aschaffenburg',
  'Augsburg',
  'Berlin',
  'Bochum',
  'Bonn',
  'Bottrop',
  'Braunschweig',
  'Bremen',
  'Chemnitz',
  'Cologne',
  'Düsseldorf',
  'Dortmund',
  'Dresden',
  'Duisburg',
  'Erfurt',
  'Essen',
  'Frankfurt am Main',
  'Freiburg im Breisgau',
  'Gelsenkirchen',
  'Hamburg',
  'Hannover',
  'Heidelberg',
  'Heilbronn',
  'Kaiserslautern',
  'Karlsruhe',
  'Kassel',
  'Kiel',
  'Koblenz',
  'Krefeld',
  'Leipzig',
  'Leverkusen',
  'Lübeck',
  'Magdeburg',
  'Mainz',
  'Mannheim',
  'Mönchengladbach',
  'München',
  'Mülheim an der Ruhr',
  'Neuss',
  'Nürnberg',
  'Oberhausen',
  'Offenburg',
  'Oldenburg',
  'Osnabrück',
  'Paderborn',
  'Passau',
  'Pforzheim',
  'Potsdam',
  'Recklinghausen',
  'Regensburg',
  'Reutlingen',
  'Rostock',
  'Saarbrücken',
  'Salzgitter',
  'Schwäbisch Gmünd',
  'Schwerin',
  'Solingen',
  'Stuttgart',
  'Ulm',
  'Wiesbaden',
  'Wolfsburg',
  'Würzburg',
]

export default function DieSteadte() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="flex flex-wrap gap-2 justify-center ">
      {cities.slice(0, showMore ? cities.length : 14).map((city) => (
        <div key={city} className=" justify-center text-center rounded-md border w-48 px-2 py-2" style={{backgroundColor:'#f4f7fa' , color:'#002855'}}>
          {city}
        </div>
      ))}
      <Button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 rounded-md font-bold px-4 py-2"
        style={{backgroundColor:'#f4f7fa' , color:'#002855'}}
      >
        {showMore ? 'Weniger' : 'Mehr'}
      </Button>
    </div>
  )
}