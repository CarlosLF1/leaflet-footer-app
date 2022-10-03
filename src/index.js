import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/footer';
import ContextProvider from './component/'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ContextProvider>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
          {/* <Route path='/' element={<Homepage />} />
          <Route path='/rlist' element={<Restaurantslist />} />
          <Route path='/categories' element={<Categories />} /> */}
      </Routes>
      <Footer />
  </BrowserRouter>
  </ContextProvider>
);


