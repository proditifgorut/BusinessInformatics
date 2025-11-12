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
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=AI+Chatbot",
    title: "AI-Powered Chatbot untuk Customer Service",
    description: "Implementasi chatbot cerdas untuk memberikan dukungan pelanggan 24/7 secara otomatis."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Predictive+Maintenance",
    title: "Predictive Maintenance untuk Manufaktur",
    description: "Menggunakan sensor IoT dan ML untuk memprediksi kegagalan mesin sebelum terjadi."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Smart+City+Transport",
    title: "Dashboard Transportasi Publik Smart City",
    description: "Sistem pelacakan dan optimisasi rute bus kota secara real-time."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Logistics+ERP",
    title: "Implementasi ERP untuk Perusahaan Logistik",
    description: "Integrasi penuh rantai pasok, keuangan, dan operasional dalam satu sistem."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Digital+Onboarding",
    title: "Digital Onboarding untuk Nasabah Bank",
    description: "Menyederhanakan proses pembukaan rekening baru melalui platform digital."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=E-Procurement",
    title: "Sistem E-Procurement untuk Instansi Pemerintah",
    description: "Menciptakan proses pengadaan barang yang transparan dan efisien."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Recommendation+Engine",
    title: "Recommendation Engine untuk E-commerce",
    description: "Meningkatkan penjualan dengan sistem rekomendasi produk yang dipersonalisasi."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Fraud+Detection",
    title: "Sistem Deteksi Penipuan Keuangan",
    description: "Menggunakan machine learning untuk mengidentifikasi transaksi mencurigakan secara real-time."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Cloud+Migration",
    title: "Strategi Migrasi Cloud untuk Startup",
    description: "Memindahkan infrastruktur on-premise ke lingkungan cloud yang skalabel dan efisien."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Telemedicine",
    title: "Platform Telemedicine untuk Penyedia Kesehatan",
    description: "Memfasilitasi konsultasi pasien jarak jauh yang aman dan mudah."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Invoice+Automation",
    title: "Otomatisasi Pemrosesan Faktur",
    description: "Menggunakan OCR dan AI untuk mengekstrak data dari faktur secara otomatis."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Supply+Chain+Visibility",
    title: "Platform Visibilitas Rantai Pasok",
    description: "Pelacakan barang secara end-to-end dari pemasok hingga pelanggan."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Gamified+Training",
    title: "Modul Pelatihan Karyawan Berbasis Gamifikasi",
    description: "Meningkatkan keterlibatan dan retensi pengetahuan dalam pelatihan korporat."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Smart+Waste+Management",
    title: "Sistem Manajemen Sampah Cerdas",
    description: "Optimalisasi rute pengumpulan sampah menggunakan sensor IoT di tempat sampah."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=CLV+Prediction",
    title: "Model Prediksi Customer Lifetime Value (CLV)",
    description: "Memprediksi pendapatan masa depan dari setiap pelanggan untuk strategi marketing."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Digital+Twin",
    title: "Digital Twin untuk Proyek Konstruksi",
    description: "Model virtual untuk memonitor, mensimulasikan, dan mengelola kemajuan konstruksi."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=ESG+Reporting",
    title: "Dashboard Pelaporan ESG Otomatis",
    description: "Mengumpulkan data Lingkungan, Sosial, dan Tata Kelola untuk pelaporan kepatuhan."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Public+Health+Analytics",
    title: "Platform Analitik Data Kesehatan Masyarakat",
    description: "Melacak penyebaran penyakit dan tren kesehatan untuk kementerian kesehatan."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=RPA+for+HR",
    title: "Robotic Process Automation (RPA) untuk HR",
    description: "Otomatisasi tugas-tugas repetitif HR seperti penggajian dan manajemen data karyawan."
  },
  {
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1B263B/00AEEF?text=Cybersecurity+Platform",
    title: "Platform Intelijen Ancaman Siber",
    description: "Menganalisis data ancaman untuk melindungi aset digital perusahaan secara proaktif."
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
