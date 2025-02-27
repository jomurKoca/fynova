'use client';
//import React, { useState } from 'react';
//import Link from 'next/link';
// import { Tooltip , TooltipContent , TooltipTrigger , TooltipProvider } from '@/components/ui/tooltip';
//import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
//import AdresseDialog from './AdresseDialog';
import { Navigation, LayoutGrid, Menu, BadgePercent, User, Search } from 'lucide-react';
import SearchIconInput from './SearchIconInput';
import { Button } from '@/components/ui/button';
import AdresseButton from './AdresseButton';
import KategorieFenster from './KategorieFenster';
import KategorieHeader from './KategorieHeader';

export default function Header() {
  return (
    <section className="w-full">
      <div className="shadow-md fixed left-0 w-full border-b border-gray-100 bg-white">
        
        <div className="flex flex-col sm:flex-row my-4 gap-2 sm:gap-8">
          
          <div className="flex justify-start gap-24 border-b sm:border-none mb-5 sm:mb-0">
            <KategorieFenster />
            <h1 className=" ml-10 mb-2 text-center cursor-pointer text-3xl font-extrabold text-[#e2186f]">
              <i>Fynova'</i>
            </h1>
          </div>
          <div className="ml-4 sm:ml-0">
            <AdresseButton/>
          </div>
        </div>

        {/* Menü ve Arama Alanı */}
        <div className="flex sm:flex-row gap-5 mb-2 items-center justify-between px-8">
          <div className="flex flex-row gap-5">
    	      <KategorieHeader />
            <Button className="hidden sm:flex bg-[#fde9f1] text-[#e2186f] font-bold rounded-3xl hover:bg-inherit w-36">
              <LayoutGrid /> Entdecken
            </Button>
            

            <Button className="hidden sm:flex rounded-3xl gap-2 bg-[#f4f7fa] text-[#002855] w-36 hover:text-[#e2186f] hover:bg-inherit">
              <BadgePercent /> Angebote
            </Button>

            <Button className="hidden sm:flex rounded-3xl w-36 gap-2 bg-[#f4f7fa] text-[#002855] hover:text-[#e2186f] hover:bg-inherit">
              <User /> Profil
            </Button>
          </div>
          <div className="relative hidden sm:flex items-center">
            <SearchIconInput />
          </div>
        </div>
      </div>
    </section>
  );
}
{/*
  Die Header-Komppnente wird in /Shop/layout.jsx importiert und gerendert. Die Ikonen sind von Lucide-React.
  Die AdresseButton-Komponente wird in der Header-Komponente gerendert.
  hidden sm:flex bedeutet, dass das Element auf kleinen Bildschirmen ausgeblendet wird und auf größeren Bildschirmen angezeigt wird.
*/}