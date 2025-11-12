import AnimatedSection from '../components/AnimatedSection';
import { Lightbulb, BarChart3, BrainCircuit, Building, Landmark } from 'lucide-react';

const services = [
  { icon: <Lightbulb size={40} className="text-accent-blue" />, title: "Digital Transformation Consulting", description: "Analisis proses bisnis dan rencana transformasi digital berbasis data." },
  { icon: <BarChart3 size={40} className="text-accent-blue" />, title: "Business Intelligence & Data Analytics", description: "Dashboard interaktif untuk mendukung pengambilan keputusan." },
  { icon: <BrainCircuit size={40} className="text-accent-blue" />, title: "AI & Automation Solutions", description: "Otomatisasi tugas rutin dan pengembangan sistem cerdas untuk bisnis." },
  { icon: <Building size={40} className="text-accent-blue" />, title: "ERP & CRM Integration", description: "Integrasi keuangan, SDM, logistik, dan pelanggan dalam satu sistem terpadu." },
  { icon: <Landmark size={40} className="text-accent-blue" />, title: "E-Government & Smart Organization", description: "Penerapan sistem digital di sektor publik untuk efisiensi dan transparansi." },
];

const Services = () => {
  return (
    <AnimatedSection id="services" className="py-20 bg-dark-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Solusi Teknologi untuk Meningkatkan Efisiensi Bisnis Anda</h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-dark-grey p-8 rounded-lg shadow-lg flex flex-col items-start space-y-4 border border-transparent hover:border-accent-blue transition-colors duration-300">
              {service.icon}
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-light-grey flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
