'use client';
//import React from 'react';
import { Navigation, LayoutGrid, Menu, BadgePercent, User , ShoppingBasket, Search } from 'lucide-react';
import Link from 'next/link';


export default function MobileFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md z-50 sm:hidden">
      <div className="flex justify-around items-center py-3 text-[#002855]">

            <button className="flex flex-col items-center hover:text-[#e2186f]">
                <LayoutGrid size={24} />
                <span className="text-sm">Entdecken</span>
            </button>

            <button className="flex flex-col items-center text-[#e2186f]">
                <BadgePercent size={24} />
                <span className="text-sm">Angebote</span>
            </button>

            <Link href="/Shop">              
                <button className="flex flex-col items-center  hover:text-[#e2186f]">
                    <ShoppingBasket size={24} />
                    <span className="text-sm">Warenkorb</span>
                </button>
            </Link>
           
            <Link href="/Shop">
            <button className="flex flex-col items-center hover:text-[#e2186f]">
            <Search size={24} />
            <span className="text-sm">Stöbern</span>
            </button>
            </Link>

           
            <button className="flex flex-col items-center text-gray-700 hover:text-[#e2186f]">
                <User size={24} />
                <span className="text-sm">Profil</span>
            </button>
      </div>
    </div>
  );
}
{/*
  Footer wird nur auf mobilen Geräten angezeigt
  5 Buttons: Entdecken, Angebote, Warenkorb, Stöbern, Profil
  fixiert am unteren Bildschirmrand
  z-50 sorgt dafür, dass der Footer über allen anderen Elementen liegt
  bottom -0 und left-0 sorgen dafür, dass der Footer am unteren Bildschirmrand fixiert ist
*/}