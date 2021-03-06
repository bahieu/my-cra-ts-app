import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import PageFooter from './component/footer';
import { MenuIcon } from './styles/Navbar';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Business from './Pages/Business';
import Jobs from './Pages/Jobs';

function App() {
  return (
    <Router>
      <Navbar />
      <MenuIcon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <PageFooter />
    </Router>
  );
}

export default App;
