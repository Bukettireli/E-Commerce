import React, { useState } from 'react';
import TopBar from './TopBar'; 
import { ShoppingCart, Menu, Heart, User, Search, ChevronDown } from 'lucide-react';

function Header() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop', dropdown: true },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
        { name: 'Pages', path: '/pages' },
    ];
    
    const categories = {
        Kadın: ['Bags', 'Belts', 'Cosmetics', 'Hats'],
        Erkek: ['Bags', 'Belts', 'Cosmetics', 'Hats'],
    };

    const DropdownMenu = () => (
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 z-50 min-w-[300px] border border-gray-100 left-1/2 transform -translate-x-1/2">
            <div className="flex p-4">
                {Object.keys(categories).map(key => (
                    <div key={key} className="flex flex-col mr-8 min-w-[100px]">
                        <h4 className="font-bold text-[#252B42] mb-2">{key}</h4>
                        {categories[key].map(item => (
                            <a key={item} href="#" className="text-gray-600 hover:text-[#23A6F0] py-1 text-sm whitespace-nowrap">
                                {item}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );


    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <TopBar /> 
            
            <nav className="container mx-auto flex justify-between items-center py-4 px-4 h-[70px]">
                
                <div className="flex items-center"> 
                    
                    <h1 className="text-2xl font-bold text-[#252B42] mr-12">Bandage</h1> 
                    <div className="flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map(link => (
                            <div key={link.name} className={`relative ${link.dropdown ? 'group' : ''}`}>
                                <a 
                                    href={link.path} 
                                    className="font-bold text-sm text-[#737373] hover:text-[#252B42] flex items-center transition"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={14} className="ml-1 text-[#737373] group-hover:text-[#252B42] transition" />}
                                </a>
                                {link.dropdown && <DropdownMenu />}
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="flex items-center space-x-4 lg:space-x-8 text-[#23A6F0]">
                    
                  
                    <div className="flex items-center space-x-2">
                       <User size={20} />
                       <span className="font-bold text-sm">Login / Register</span>
                    </div>
                    
                    <Search size={20} className="hover:text-[#252B42] cursor-pointer" />
                    
                    <div className="flex items-center space-x-1">
                      <Heart size={20} />
                      <span className="text-sm font-bold text-[#252B42]">1</span> 
                    </div>
                    
                    <div className="flex items-center space-x-1">
                        <ShoppingCart size={20} />
                        <span className="text-sm font-bold text-[#252B42]">0</span>
                    </div>
                    
                </div>
            </nav>
            
        </header>
    );
}

export default Header;