'use client';
import { Card } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { CirclePlus } from 'lucide-react';

export default function AngebotsKarusell() {
  return (
    <div className="w-full mx-auto px-6 py-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={8}
        navigation
        className="w-full"
        loop={false}
        slidesPerGroup={8} // Her kaydırmada 8 kart ilerler
        breakpoints={{
          320: { slidesPerView: 2, slidesPerGroup: 2}, // Küçük ekranlar için 1 kart
          480: { slidesPerView: 2, slidesPerGroup: 2 }, // Küçük ekranlar için 2 kart
          640: { slidesPerView: 3, slidesPerGroup: 3 }, // Orta ekranlar için 3 kart
          768: { slidesPerView: 4, slidesPerGroup: 4 }, // Orta ekranlar için 4 kart
          1024: { slidesPerView: 6, slidesPerGroup: 6 }, // Büyük ekranlar için 6 kart
          1280: { slidesPerView: 8, slidesPerGroup: 8 }, // Çok büyük ekranlar için 8 kart
        }}
      >
        {Array.from({ length: 32 }).map((_, index) => (
          <SwiperSlide key={index}>
            <Card className="p-4 relative w-52 h-52 bg-[#f8f8f8] group-[.group]:bg-white"> {/* group sinifini bilesene gecirdim import ettigim sayfada bg degistirebilmek icin*/}
              <CirclePlus className="absolute bottom-2 left-2 text-[#e2186f] cursor-pointer" size={36} />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}