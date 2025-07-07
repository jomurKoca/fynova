import React from "react";
import Header from "../components/homepage/Header";
import HomeBanner from "../components/homepage/HomeBanner";
import HeroSection from "../components/homepage/HeroSection";
import BannerBild from "../components/homepage/BannerBild";
import InfoSection from "../components/homepage/InfoSection";
import StaffSection from "../components/homepage/StaffSection";
import AppInfo from "../components/homepage/AppInfo";
import QuickLinks from "../components/homepage/QuickLinks";


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
