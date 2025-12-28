import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import { projectsData } from './projectsData';
import DetailedServices from './components/DetailedServices';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects projects={projectsData} />
      <DetailedServices />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
