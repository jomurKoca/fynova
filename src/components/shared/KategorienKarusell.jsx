'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import { CirclePlus } from 'lucide-react';
import { alleKategorien } from './KategorieHeader';

export default function KategorienKarusell() {
  return (
    <div className="w-full mx-auto px-6 py-6 mb-24">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={8}
        navigation
        className="w-full"
        loop={false}
        slidesPerGroup={8} // Her kaydırmada 8 kart ilerler
        breakpoints={{
          320: { slidesPerView: 2, slidesPerGroup: 2 }, // Küçük ekranlar için 1 kart
          480: { slidesPerView: 2, slidesPerGroup: 2 }, // Küçük ekranlar için 2 kart
          640: { slidesPerView: 3, slidesPerGroup: 3 }, // Orta ekranlar için 3 kart
          768: { slidesPerView: 4, slidesPerGroup: 4 }, // Orta ekranlar için 4 kart
          1024: { slidesPerView: 6, slidesPerGroup: 6 }, // Büyük ekranlar için 6 kart
          1280: { slidesPerView: 8, slidesPerGroup: 8 }, // Çok büyük ekranlar için 8 kart
        }}
      >
        {alleKategorien.map((kategorie, index) => (
          <SwiperSlide key={index}>
            <Card className="p-4 relative w-52 h-72 bg-[#e3f7f7]">
              <CardContent className="flex justify-center items-center">
                <h3 className="text-sm font-bold text-[#002855]">{kategorie}</h3>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}