import React from 'react';

function EditorPickSection() {
    return (
        <section className="py-10 md:py-20 text-center bg-[#FAFAFA]">
          
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
                <header className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wider mb-2">
                        EDITOR'S PICK
                    </h2>
                    <p className="text-sm text-gray-500">
                        Problems trying to resolve the conflict between 
                    </p>
                </header>

             
                <div 
                    
                    className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3 md:grid-rows-2" 
                    
                    style={{ 
                        maxWidth: '1050px', 
                        margin: '0 auto',
                        gap: '30px' 
                    }} 
                >
                  
                    <a href="/men" 
                        className="relative block group overflow-hidden transition duration-300 md:col-span-1 md:row-span-2"
                        
                        style={{ width: '510px', height: '500px', backgroundImage: `url(/images/men.jpg)`, backgroundSize: 'cover', backgroundPosition: 'left center' }}
                    >
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-bold text-sm py-2 px-6 tracking-wider">
                           MEN
                        </div>
                    </a>
                    
               
                    <a href="/women" 
                        className="relative block group overflow-hidden transition duration-300 md:col-span-1 md:row-span-2"
                        style={{ width: '240px', height: '500px', backgroundImage: `url(/images/women.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
                    >
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-bold text-sm py-2 px-6 tracking-wider">
                          WOMEN
                        </div>
                    </a>

                  
                    <a href="/accessories" 
                        className="relative block group overflow-hidden transition duration-300 md:col-span-1"
                        style={{ width: '240px', height: '242px', backgroundImage: `url(/images/accessories.jpg)`, backgroundSize: 'cover', backgroundPosition: 'right top' }}
                    >
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-bold text-sm py-2 px-6 tracking-wider">
                          ACCESSORIES
                        </div>
                    </a>

                    <a href="/kids" 
                        className="relative block group overflow-hidden transition duration-300 md:col-span-1"
                        style={{ width: '240px', height: '242px', backgroundImage: `url(/images/kids.jpg)`, backgroundSize: 'cover', backgroundPosition: 'right bottom' }}
                    >
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-bold text-sm py-2 px-6 tracking-wider">
                          KIDS
                        </div>
                    </a>
                    
                </div>
            </div>
        </section>
    );
}

export default EditorPickSection;