import { BriefcaseBusiness, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-grey text-light-grey">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness className="text-accent-blue" />
              <span className="text-xl font-bold text-white">Informatics</span>
            </div>
            <p className="text-sm">Connecting business and technology for a digital future.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} className="text-accent-blue" /> info@yourdomain.com</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-accent-blue" /> +62 8xx-xxxx-xxxx</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-accent-blue" /> Gorontalo / Jakarta / Bandung</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <p className="text-sm">Stay updated with the latest trends in digital transformation.</p>
            {/* Social media icons can be added here */}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Informatics Consulting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
