'use client'
import React from 'react'
// import KategorieHeader from '../components/shared/KategorieHeader';
import AktionsKarte from '../../components/shop/AktionsKarte';
import AngebotsKarusell from '../../components/shop/AngebotsKarusell';
import NeuBeiFynova from '../../components/shared/NeuBeiFynova';
import KategorienKarusell from '../../components/shared/KategorienKarusell';



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

