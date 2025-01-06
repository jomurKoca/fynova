import React from "react";
import Header from "./_components/header";
import HomeBanner from "./_components/homePage/HomeBanner";
import HeroSection from "./_components/homePage/HeroSection";
import BannerBild from "./_components/homePage/BannerBild";


export default function Home() {
  return (
    <div>
    <Header />
    <HomeBanner />
    <HeroSection />
    <BannerBild />
    </div>
    
    );
  }
