import React from 'react';
import { Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

function TopBar() {
    return (
        <div className="bg-[#252B42] text-[#FFFFFF] py-2.5  w-[1440px] h-[56px]">
            <div className=" mx-auto flex justify-between items-center px-6">
                
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <Phone size={16} /> 
                        <span className="text-sm font-bold">(225) 555-0118</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail size={16} /> 
                        <span className="text-sm font-bold">michelle.rivera@example.com</span>
                    </div>
                </div>

                <span className="font-bold text-sm">
                    Follow Us and get a chance to win 80% off
                </span>

                <div className="flex items-center space-x-3">
                    <span className="font-bold text-sm">Follow Us:</span>
                    <div className="flex gap-2.5">
                        <a href="#" className="hover:text-[#23A6F0] transition">
                            <Instagram size={16} />
                        </a>
                        <a href="#" className="hover:text-[#23A6F0] transition">
                            <Youtube size={16} />
                        </a>
                        <a href="#" className="hover:text-[#23A6F0] transition">
                            <Facebook size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;