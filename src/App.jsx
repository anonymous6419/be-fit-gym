import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveTimings from './components/LiveTimings';
import Facilities from './components/Facilities';
import BmiCalculator from './components/BmiCalculator';
// import Coaches from './components/Coaches';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';
import LightboxModal from './components/LightboxModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { getGymLiveStatus } from './utils/timingsEngine';

export default function App() {
  const [liveStatus, setLiveStatus] = useState(getGymLiveStatus());
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [lightboxItem, setLightboxItem] = useState(null);

  // Live timer tick every second for real-time gym opening countdown and live active batches
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveStatus(getGymLiveStatus());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenTrialModal = (planName = '') => {
    setSelectedPlan(planName);
    setTrialModalOpen(true);
  };

  return (
    <div className="gym-app-root">
      {/* Top Announcement Bar with Live Timings (WhatsApp and phone contact removed) */}
      <TopBar 
        liveStatus={liveStatus} 
        onOpenTrialModal={handleOpenTrialModal} 
      />

      {/* Main Navigation */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTrialModal={handleOpenTrialModal} />
        <LiveTimings 
          liveStatus={liveStatus} 
          onOpenTrialModal={handleOpenTrialModal} 
        />
        <Facilities onOpenLightbox={setLightboxItem} />
        <BmiCalculator onOpenTrialModal={handleOpenTrialModal} />
        
        {/* Coaches details commented out as requested for now */}
        {/* <Coaches onOpenTrialModal={handleOpenTrialModal} /> */}

        <Reviews />
        <Faq />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive VIP Trial Pass Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        initialPlan={selectedPlan}
        onClose={() => setTrialModalOpen(false)}
      />

      {/* High-Resolution Facilities Inspection Lightbox */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      {/* Persistent Floating WhatsApp Direct Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
