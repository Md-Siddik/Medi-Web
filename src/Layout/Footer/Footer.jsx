const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">PharmaHub</h3>
          <p className="text-sm leading-relaxed">
            A modern online pharmacy platform to connect patients, doctors, and pharmacies
            seamlessly across Europe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400">Home</a></li>
            <li><a href="#" className="hover:text-emerald-400">Medicines</a></li>
            <li><a href="#" className="hover:text-emerald-400">Pharmacies</a></li>
            <li><a href="#" className="hover:text-emerald-400">Doctors</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">Email: support@pharmahub.eu</p>
          <p className="text-sm">Phone: +44 1234 567890</p>
          <p className="text-sm">Address: Berlin, Germany 🇩🇪</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} PharmaHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;