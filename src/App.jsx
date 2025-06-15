import { useState, lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/header";

const ContactModal = lazy(() => import("./components/ContactModal"));

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openModal = () => setIsContactOpen(true);
  const closeModal = () => setIsContactOpen(false);

  return (
    <div className="font-sans">
      <Header onContactClick={openModal} />
      <Hero />
      <About />
      <Features />
      <Bio />
      <Footer onContactClick={openModal} />

      <Suspense
        fallback={
          <div className="text-center p-4">Loading contact modal...</div>
        }
      >
        {isContactOpen && (
          <ContactModal isOpen={isContactOpen} onClose={closeModal} />
        )}
      </Suspense>
    </div>
  );
};

export default App;
