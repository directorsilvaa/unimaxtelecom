import React from 'react';
import { Wifi, Phone, MessageSquare, Clock, Shield, MapPin, CreditCard, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import About from './components/About';
import Advantages from './components/Advantages';
import ReferralProgram from './components/ReferralProgram';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <About />
        <Advantages />
        <ReferralProgram />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;