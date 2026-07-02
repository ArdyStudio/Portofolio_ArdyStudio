import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import LiveWorksSection from './components/LiveWorksSection';
import FrameworkSection from './components/FrameworkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black tracking-[-0.02em] text-white selection:bg-[#e8702a]/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <LiveWorksSection />
      <FrameworkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
