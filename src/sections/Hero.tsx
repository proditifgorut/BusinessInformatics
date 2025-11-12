import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import AnimatedSection from '../components/AnimatedSection';

const Hero = () => {
  return (
    <AnimatedSection id="home" className="min-h-screen flex items-center bg-dark-blue">
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Ubah Data dan Teknologi Menjadi <span className="text-accent-blue">Kekuatan Bisnis</span> Anda
            </h1>
            <p className="text-lg text-light-grey mb-8">
              Kami membantu perusahaan mengintegrasikan sistem informasi, data analytics, dan strategi digital untuk meningkatkan efisiensi dan inovasi bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="contact" smooth={true} duration={500} offset={-70} className="bg-accent-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all text-center cursor-pointer">
                Konsultasi Gratis Sekarang
              </Link>
              <Link to="services" smooth={true} duration={500} offset={-70} className="bg-dark-grey text-light-grey font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-all text-center cursor-pointer">
                Pelajari Layanan Kami
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img src="https://img-wrapper.vercel.app/image?url=https://placehold.co/600x450/1B263B/E0E1DD?text=Digital+Dashboard" alt="Digital Dashboard Illustration" className="rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
