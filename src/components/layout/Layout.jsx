import React from 'react';
import TopBar from './TopBar';   
import Header from './Header';   

function Layout({ children }) {
    return (
        
        <div className="min-h-screen flex flex-col bg-[#FAFAFA]"> 
            
            <TopBar />   
            <Header />  
      
            <main className="flex-grow">
                {children} 
            </main>
            
            
        </div>
    );
}

export default Layout;