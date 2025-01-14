'use client'
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';
import { LayoutGrid , Menu, BadgePercent, User} from 'lucide-react';
import { Search } from 'lucide-react';




export default function Header() {
  return (
    <section className="py-4 px-8">
      <div className="flex flex-row gap-10 mb-6">
        <h1 className="cursor-pointer text-3xl font-extrabold text-[#e2186f]">
          <i>Fynova</i>
        </h1>

        <Link href="/Shop">
          <Button className="p-6 w-auto rounded-3xl font-bold text-[#e2186f] bg-[#fde9f1] hover:bg-transparent">
          <Navigation /> Gib hier deine Lieferadresse ein     
          </Button>
        </Link>
      </div>

      <div className="flex sm:flex-row gap-5 mb-8 ">  
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
      <div className="flex justify-end">
        <Button
          className="rounded-3xl flex flex-row gap-2 bg-[#f4f7fa] text-[#002855] hover:text-[#e2186f] hover:bg-inherit transition-all duration-300"
          onClick={(e) => {
        const button = e.currentTarget;
        button.style.width = button.style.width === '100%' ? '25%' : '100%';
          }}
        >
          <Search /> Suche
        </Button>
      </div>
    </section>   
  );
}
