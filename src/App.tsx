import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import About from './components/About';
import Advantages from './components/Advantages';
import ReferralProgram from './components/ReferralProgram';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientArea from './components/ClientArea';
import ReferralSystem from './components/ReferralSystem';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Plans />
                <About />
                <Advantages />
                <ReferralProgram />
                <Coverage />
                <Contact />
              </>
            } />
            <Route path="/cliente" element={<ClientArea />} />
            <Route path="/indicar" element={<ReferralSystem />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App