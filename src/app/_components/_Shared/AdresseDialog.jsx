// components/AdresseDialog.jsx
import React from 'react';
import { Dialog, DialogContent , DialogTitle} from '@/components/ui/dialog';
import { VisuallyHidden  } from '@radix-ui/react-visually-hidden';

export default function AdresseDialog({ open , onOpenChange}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      

      {/* Pop-up İçeriği */}
      <DialogContent className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg p-6 max-w-2xl">
        {/* Görsel olarak gizlenmiş başlık */}
        <VisuallyHidden>
          <DialogTitle>Adresse eingeben</DialogTitle>
        </VisuallyHidden>
        {/* Sol Kısım */}
        <div className="flex-1 bg-[#fde9f1] p-6 rounded-l-lg">
          <h2 className="text-[#e2186f] font-bold text-2xl">Gib deine Adresse ein</h2>
          <p className="text-sm text-[#4a4a4a] mt-2">
            Lass dir alle Lieblingsprodukte nach Hause liefern.
          </p>
          <div className="mt-4">
            <img
              src="/images/grocery-bag.png"
              alt="Grocery bag"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Sağ Kısım */}
        <div className="flex-1 p-6">
          <input
            type="text"
            placeholder="Gib hier deine Lieferadresse ein"
            className="w-full text-sm border-[#002855] focus:ring-[#002855] focus:outline-none rounded"
          />
          <div className="flex items-center gap-2 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-[#002855]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75S17.385 21.75 12 21.75 2.25 17.385 2.25 12 6.615 2.25 12 2.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5v6l4 2"
              />
            </svg>
            <p className="text-[#002855] text-sm">
              Aktuellen Standort verwenden
            </p>
          </div>
          <p className="text-sm text-[#4a4a4a] mt-2">Wir brauchen deine Zustimmung.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
