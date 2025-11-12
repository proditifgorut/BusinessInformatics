import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  return (
    <AnimatedSection id="contact" className="py-20 bg-dark-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Hubungi Kami</h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4"></div>
          <p className="text-light-grey mt-4 max-w-2xl mx-auto">Siap untuk transformasi digital? Jadwalkan konsultasi gratis atau hubungi kami langsung.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-dark-blue p-8 rounded-lg shadow-2xl">
          <form>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-grey mb-2">Nama</label>
                <input type="text" id="name" className="w-full bg-dark-grey border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue" />
              </div>
              <div>
                <label htmlFor="contact-info" className="block text-sm font-medium text-light-grey mb-2">Email / WhatsApp</label>
                <input type="text" id="contact-info" className="w-full bg-dark-grey border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue" />
              </div>
              <div>
                <label htmlFor="service-type" className="block text-sm font-medium text-light-grey mb-2">Jenis layanan yang dibutuhkan</label>
                <select id="service-type" className="w-full bg-dark-grey border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue">
                  <option>Digital Transformation</option>
                  <option>Business Intelligence</option>
                  <option>AI & Automation</option>
                  <option>ERP & CRM</option>
                  <option>E-Government</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-grey mb-2">Pesan singkat</label>
                <textarea id="message" rows={4} className="w-full bg-dark-grey border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"></textarea>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button type="submit" className="w-full bg-accent-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all">
                Jadwalkan Konsultasi
              </button>
              <a href="https://wa.me/628xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all text-center">
                Hubungi via WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
