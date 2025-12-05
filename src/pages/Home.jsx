import React from 'react';
import HeroSection from '../components/HeroSection'; 
import EditorPickSection from '../components/EditorPickSection'; 
import BestsellerSection from '../components/BestsellerSection'; 
import BannerSection from '../components/BannerSection'; 
import BannerTwoSection from '../components/BannerTwoSection'; 
import FeaturedPostsSection from '../components/FeaturedPostsSection'; 
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="home-page bg-[#FAFAFA]"> 
            
            <HeroSection />

            <EditorPickSection />
            
            <BestsellerSection /> 
            
            <BannerSection /> 
            
            <BannerTwoSection /> 
            
            <FeaturedPostsSection />

            <Footer />
        </div>
    );
}

export default Home;