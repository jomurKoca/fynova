// import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Menu , Home , Gift } from 'lucide-react';
import Link from 'next/link';
import { alleKategorien } from '@/constants/alleKategorien'; // Importieren der Kategorien aus einer zentralen Datei

export default function KategorieFenster() {
  

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          className="sm:hidden border-none shadow-sm bg-white text-sm font-medium text-[#002855] hover:bg-gray-50"
        >
          <Menu/> 
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto max-h-screen"> {/* Pencerenin sol taraftan açılmasını sağlar */}
        <SheetHeader>
          <SheetTitle className="text-[#e2186f] cursor-pointer">
            <Link href="/Shop">
              <strong><i>Fynova'</i></strong>
            </Link>
          </SheetTitle>
          {/*
            <SheetDescription>
              KATEGORIEN
            </SheetDescription>
          */}
        </SheetHeader>
        <div className="py-1">
        <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-[#002855] hover:bg-gray-100"
          >
            <Home className="mr-2" /> Home
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-[#002855] hover:bg-gray-100"
          >
            <Gift className="mr-2" /> Angebote
          </a>
          <h1 className="block font-bold px-4 py-2 text-sm text-[#e2186f]">
            KATEGORIEN
          </h1>
          {alleKategorien.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-[#002855] hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}