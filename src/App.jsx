// App.jsx

import React from 'react';
import Home from './assets/components/Home';
import About from './assets/components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './assets/components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
