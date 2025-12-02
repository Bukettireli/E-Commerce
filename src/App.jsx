import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />
      
      <main className="flex-grow">
         <HeroSection />
      </main>
      
    </div>
  );
}

export default App;