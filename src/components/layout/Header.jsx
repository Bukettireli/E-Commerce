import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react'; 

function Header() {
    const navLinks = [
        { name: 'Erkek', href: '/men' },
        { name: 'Kadın', href: '/women' },
        { name: 'Aksesuarlar', href: '/accessories' },
        { name: 'Hakkımızda', href: '/about' },
        { name: 'İletişim', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-extrabold text-[#2DC071] tracking-wider">
                            BANDAGE
                        </a>
                    </div>
                    
                    <nav className="hidden lg:flex lg:gap-x-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-[#2DC071] transition duration-150 py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-x-4">
                      
                        <a href="/login" className="flex items-center text-sm font-medium text-[#2DC071] hover:text-green-700 transition duration-150 hidden md:flex">
                            <User size={18} className="mr-1" />
                            <span>Login / Register</span>
                        </a>

                  
                        <div className="flex items-center gap-x-4">
                         
                            <button className="text-gray-700 hover:text-[#2DC071] transition p-1" aria-label="Arama">
                                <Search size={20} />
                            </button>

                 
                            <a href="/cart" className="relative text-gray-700 hover:text-[#2DC071] transition p-1" aria-label="Sepetim">
                                <ShoppingBag size={20} />
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    1
                                </span>
                            </a>
                        </div>
                        
                        <button 
                            className="lg:hidden text-gray-700 hover:text-[#2DC071] transition p-1" 
                            aria-label="Mobil Menü"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;