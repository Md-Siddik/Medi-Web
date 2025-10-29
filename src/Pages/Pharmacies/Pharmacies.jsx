import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaPills, FaClock, FaSearch } from "react-icons/fa";

const pharmacyDetails = [
  {
    id: 1,
    name: "HealthPlus Pharmacy",
    location: "Dhanmondi, Dhaka",
    image:
      "https://img.freepik.com/premium-photo/modern-pharmacy-interior-with-shelves-drugs-healthcare-products_808092-7.jpg",
    rating: 4.8,
    totalMedicines: 120,
    open: true,
  },
  {
    id: 2,
    name: "Square Medicine Corner",
    location: "Uttara, Dhaka",
    image:
      "https://img.freepik.com/premium-photo/pharmacy-interior-with-shelves-medicines-products_808092-21.jpg",
    rating: 4.7,
    totalMedicines: 98,
    open: false,
  },
  {
    id: 3,
    name: "MediCare Store",
    location: "Chittagong City",
    image:
      "https://img.freepik.com/free-photo/pharmacy-interior_23-2148899839.jpg",
    rating: 4.5,
    totalMedicines: 75,
    open: true,
  },
  {
    id: 4,
    name: "LifeCare Pharma",
    location: "Banani, Dhaka",
    image:
      "https://img.freepik.com/premium-photo/modern-drugstore-interior-with-shelves-products_808092-19.jpg",
    rating: 4.9,
    totalMedicines: 150,
    open: true,
  },
];

const Pharmacies = () => {
  const [search, setSearch] = useState("");

  const filteredPharmacies = pharmacyDetails.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            🏥 Find Your Trusted Pharmacy
          </h2>
        </div>

        {/* SEARCH BAR */}
        <div className="relative max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="🔍 Search pharmacy by name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-12 pr-4 rounded-2xl border border-emerald-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 bg-white/70 backdrop-blur-md shadow-sm placeholder-gray-400 text-gray-700 text-base outline-none transition-all"
          />
          <FaSearch className="absolute top-3.5 left-4 text-emerald-500 text-lg" />
        </div>

        {/* GRID */}
        {filteredPharmacies.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPharmacies.map((pharmacy) => (
              <div
                key={pharmacy.id}
                className="group relative bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] transform hover:-translate-y-2 transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pharmacy.image}
                    alt={pharmacy.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <FaStar className="text-yellow-400" /> {pharmacy.rating}
                  </div>
                  <div
                    className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow ${
                      pharmacy.open
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <FaClock /> {pharmacy.open ? "Open Now" : "Closed"}
                  </div>
                </div>

                {/* DETAILS */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {pharmacy.name}
                  </h3>

                  <p className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                    <FaMapMarkerAlt className="text-emerald-500" />
                    {pharmacy.location}
                  </p>

                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                    <FaPills className="text-emerald-500" />
                    <span>{pharmacy.totalMedicines} Medicines Available</span>
                  </div>

                  <Link
                    to={`/pharmacies/${pharmacy.id}`}
                    className="inline-block w-full text-center bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>

                {/* OVERLAY LIGHT */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-lg font-medium">
            😕 No pharmacies found for “{search}”
          </div>
        )}
      </div>
    </div>
  );
};

export default Pharmacies;
