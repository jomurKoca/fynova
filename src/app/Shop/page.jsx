import React from 'react'
// import KategorieHeader from '../_components/_Shared/KategorieHeader';
import AktionsKarte from '../_components/ui/aktionsKarte';
import AngebotsKarusell from '../_components/ui/AngebotsKarusell';
import NeuBeiFynova from '../_components/_Shared/NeuBeiFynova';
import KategorienKarusell from '../_components/_Shared/KategorienKarusell';



export default function page() {
  return (
    
  <div className="min-h-screen">
    <AktionsKarte />
    <h1 className="text-[#002558] font-extrabold text-xl mt-10 ml-8">Angebote </h1>
    <AngebotsKarusell />  
    <NeuBeiFynova />
    <h1 className="text-[#002558] font-extrabold text-xl mt-10 ml-8">Frühstückbar</h1>
    <AngebotsKarusell />
    <h1 className="text-[#002558] font-extrabold text-xl mt-10 ml-8">Kategorien</h1>
    <KategorienKarusell />
  </div>
  
  );
}

