import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function HeroSection() {
    return (
        <section className="w-[1440px] h-[716px] relative flex items-center overflow-hidden ">
            
            
            <img 
                src="/homebg.jpg" 
                alt="Hero Background"
                className="absolute w-full h-full object-cover object-center w-[1440px] h-[716px]"
            />
            
            <div className="max-w-[1440px] mx-auto px-6 w-full h-full relative z-10 flex items-center">
                
               
                <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-[500px]">
                    
                    <p className="text-base font-bold tracking-wide mb-8 text-[#FFFFFF]">
                        SUMMER 2025
                    </p>
                    
                    <h2 className="text-5xl md:text-6xl lg:text-[58px] font-bold mb-8 leading-tight text-[#FFFFFF]">
                        NEW COLLECTION
                    </h2>
                    
                    <p className="text-xl md:text-[20px] mb-10 leading-[30px] text-[#FFFFFF] max-w-[376px]">
                        We know how large objects will act, 
                        but things on a small scale.
                    </p>

                    <a 
                        href="/shop"
                        className="bg-[#2DC071] text-white font-bold text-sm py-[15px] px-10 rounded-[5px] w-fit transition duration-300 hover:bg-[#24a05e] uppercase tracking-wide"
                    >
                        SHOP NOW
                    </a>
                </div>
            </div>

            <button 
                className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition z-20 rounded-full p-2"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={40} strokeWidth={2.5} />
            </button>
    
            <button 
                className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition z-20 rounded-full p-2"
                aria-label="Next Slide"
            >
                <ChevronRight size={40} strokeWidth={2.5} />
            </button>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2.5 z-20">
                <span className="h-2.5 w-16 bg-white rounded-full"></span> 
                <span className="h-2.5 w-16 bg-white/50 rounded-full"></span>
            </div>

        </section>
    );
}

export default HeroSection;