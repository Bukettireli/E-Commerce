// src/App.jsx

import React from 'react';
// v5 için Switch ve Route kullanılıyor
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Layout from './components/layout/Layout'; 
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter> 
        {/* Layout sarmalayıcı (Header, Footer vb. içerir) */}
        <Layout>
            {/* Switch, sadece ilk eşleşen rotayı render eder */}
            <Switch>
                {/* Home sayfasını kök yola atar. component={Home} v5 için doğrudur. */}
                <Route exact path="/" component={Home} /> 
                
                {/* Diğer rotalarınız buraya eklenecek */}
            </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;