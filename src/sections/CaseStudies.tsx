import AnimatedSection from '../components/AnimatedSection';

const projects = [
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Power+BI+Report",
    title: "Otomatisasi Laporan Keuangan UMKM",
    description: "Implementasi Python & Power BI untuk efisiensi pelaporan finansial."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Sales+Dashboard",
    title: "Dashboard Penjualan Real-time",
    description: "Dashboard interaktif untuk memonitor performa toko online secara langsung."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=E-Training+System",
    title: "Sistem e-Training Pegawai",
    description: "Platform pelatihan berbasis web untuk meningkatkan kompetensi pegawai pemerintah."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Sentiment+Analysis",
    title: "Analisis Sentimen Pelanggan",
    description: "Pemanfaatan AI untuk menganalisis feedback pelanggan dari media sosial secara otomatis."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=CRM+Integration",
    title: "Integrasi CRM untuk Tim Penjualan",
    description: "Menyatukan data pelanggan dari berbagai sumber ke dalam satu platform CRM terpusat."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Smart+Queue",
    title: "Sistem Antrian Cerdas Layanan Publik",
    description: "Solusi digital untuk mengurangi waktu tunggu dan meningkatkan efisiensi layanan publik."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Inventory+Prediction",
    title: "Prediksi Permintaan Stok Gudang",
    description: "Model machine learning untuk memprediksi permintaan produk dan mengoptimalkan persediaan."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Document+Digitalization",
    title: "Platform Digitalisasi Dokumen",
    description: "Transformasi dokumen fisik menjadi format digital yang terstruktur dan mudah diakses."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=HR+Dashboard",
    title: "Dashboard Kinerja SDM Interaktif",
    description: "Visualisasi data HR untuk memantau produktivitas, kehadiran, dan kepuasan karyawan."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Insurance+Automation",
    title: "Otomatisasi Proses Klaim Asuransi",
    description: "Menggunakan AI untuk mempercepat validasi dan pemrosesan klaim asuransi secara akurat."
  }
];

const CaseStudies = () => {
  return (
    <AnimatedSection id="projects" className="py-20 bg-dark-grey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Studi Kasus & Proyek</h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-blue rounded-lg overflow-hidden shadow-xl group">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-light-grey text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudies;
