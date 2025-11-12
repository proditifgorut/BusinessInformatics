import AnimatedSection from '../components/AnimatedSection';
import { Zap, Database, GitMerge, BarChart } from 'lucide-react';

const values = [
  { icon: <Zap className="text-accent-blue" />, title: "Inovatif dan Berbasis Data" },
  { icon: <Database className="text-accent-blue" />, title: "Solusi Tepat Guna dan Skalabel" },
  { icon: <GitMerge className="text-accent-blue" />, title: "Integrasi Teknologi dan Strategi Bisnis" },
  { icon: <BarChart className="text-accent-blue" />, title: "Fokus pada Efisiensi dan Pertumbuhan" },
];

const About = () => {
  return (
    <AnimatedSection id="about" className="py-20 bg-dark-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Kami Menghubungkan Dunia Bisnis dan Teknologi</h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center text-light-grey mb-12">
          <p>
            Kami adalah tim profesional di bidang Business Informatics yang berfokus pada bagaimana teknologi informasi mendukung strategi manajemen dan efisiensi operasional. Dengan pengalaman dalam data-driven decision making, ERP, CRM, dan digital transformation, kami membantu organisasi beradaptasi di era digital.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-dark-blue p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-semibold text-white">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
