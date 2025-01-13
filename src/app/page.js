import React from "react";
import Header from "./_components/HomePageKomponenten/Header";
import HomeBanner from "./_components/HomePageKomponenten/HomeBanner";
import HeroSection from "./_components/HomePageKomponenten/HeroSection";
import BannerBild from "./_components/HomePageKomponenten/BannerBild";
import InfoSection from "./_components/HomePageKomponenten/InfoSection";
import StaffSection from "./_components/HomePageKomponenten/StaffSection";
import AppInfo from "./_components/HomePageKomponenten/AppInfo";
import QuickLinks from "./_components/HomePageKomponenten/QuickLinks";


export default function Home() {
    return (
    <div>
    <Header />
    <HomeBanner />
    <HeroSection />
    <BannerBild />
    <InfoSection />
    <StaffSection />
    <AppInfo />
    <QuickLinks />
    </div>
    
    );
  }
