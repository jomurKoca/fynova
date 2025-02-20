'use client';
//import React, { useState } from 'react';
//import Link from 'next/link';
// import { Tooltip , TooltipContent , TooltipTrigger , TooltipProvider } from '@/components/ui/tooltip';
import { Navigation, LayoutGrid, Menu, BadgePercent, User, Search } from 'lucide-react';
import SearchIconInput from './SearchIconInput';
import { Button } from '@/components/ui/button';
//import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import AdresseButton from './AdresseButton';
//import AdresseDialog from './AdresseDialog';

export default function Header() {
  return (
    <section className="px-8 w-full shadow-md z-50">
      <div className="fixed left-0 w-full border-b border-gray-100 bg-white">
        
        <div className="flex flex-row items-center justify-between px-8 mb-6">
          <h1 className="cursor-pointer text-3xl font-extrabold text-[#e2186f]">
            <i>Fynova</i>
          </h1>
          <AdresseButton />
        </div>
        {/* Menü ve Arama Alanı */}
        <div className="flex sm:flex-row gap-5 mb-2 items-center justify-between px-8">
          <div className="flex flex-row gap-5">
            <Button className="rounded-3xl flex flex-row gap-2 bg-[#f4f7fa] text-[#002855] hover:text-[#e2186f] hover:bg-inherit">
              <Menu /> Kategorien
            </Button>

            <Button className="bg-[#fde9f1] text-[#e2186f] font-bold rounded-3xl hover:bg-inherit w-36">
              <LayoutGrid /> Entdecken
            </Button>

            <Button className="rounded-3xl flex flex-row gap-2 bg-[#f4f7fa] text-[#002855] w-36 hover:text-[#e2186f] hover:bg-inherit">
              <BadgePercent /> Angebote
            </Button>

            <Button className="rounded-3xl w-36 flex flex-row gap-2 bg-[#f4f7fa] text-[#002855] hover:text-[#e2186f] hover:bg-inherit">
              <User /> Profil
            </Button>
          </div>
          <div className="relative flex items-center">
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
*/}