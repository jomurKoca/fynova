'use client';
// import { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { Button } from '@/components/ui/button';
// import KategorieFenster from './KategorieFenster';
import { Menu } from 'lucide-react';
import { alleKategorien } from '@/constants/alleKategorien'; // Importieren der Kategorien aus einer zentralen Datei

export default function KategorieHeader() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="hidden sm:flex w-36 bg-[#f4f7fa] rounded-3xl text-[#002855] hover:text-[#e2186f] hover:bg-inherit">
            <Menu /> Kategorien
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 bg-white shadow-lg rounded-md text-[#002855]">
          <div className="grid grid-cols-3 gap-4">
            {alleKategorien.map((item, index) => (
              <div key={index} className="py-1 cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}