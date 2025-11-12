import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import CaseStudies from './sections/CaseStudies';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-blue">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
