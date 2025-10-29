import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  FaArrowLeft,
  FaSearch,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaPlus,
} from "react-icons/fa";
import { ShoppingCart, ExternalLink } from "lucide-react";

const pharmacyData = {
  1: {
    name: "HealthPlus Pharmacy",
    location: "Dhanmondi, Dhaka",
    contact: "+880 1711-123456",
    email: "healthplus@gmail.com",
    image:
      "https://img.freepik.com/premium-photo/modern-pharmacy-interior-with-shelves-drugs-healthcare-products_808092-7.jpg",
    description:
      "HealthPlus Pharmacy provides top-quality medicines and healthcare products from trusted manufacturers across Bangladesh.",
    medicines: [
      {
        id: 1,
        name: "Napa Extra",
        activeIngredient: "Paracetamol 500mg",
        groupName: "Pain Relief",
        discount: 10,
        pharmacy: "HealthPlus Pharmacy",
        prices: { piece: 12, strip: 120 },
        image:
          "https://chaldn.com/_mpimage/napa-500mg-tablet-10-tablets?src=https%3A%2F%2Fstorage.googleapis.com%2Fchaldn%2Fimage%2Fproduct%2F%2F1b16a37f-9c8a-4e77-9a9d-4565c6e12fd3.jpg",
      },
      {
        id: 2,
        name: "Ace Plus",
        activeIngredient: "Paracetamol & Caffeine",
        groupName: "Pain Relief",
        discount: 0,
        pharmacy: "HealthPlus Pharmacy",
        prices: { piece: 15, strip: 150 },
        image:
          "https://chaldn.com/_mpimage/ace-plus-tablet-10-tablets?src=https%3A%2F%2Fstorage.googleapis.com%2Fchaldn%2Fimage%2Fproduct%2F%2F00981dd4-3a89-4981-b1ed-64b80db4eeb4.jpg",
      },
    ],
  },
  2: {
    name: "Square Medicine Corner",
    location: "Uttara, Dhaka",
    contact: "+880 1777-654321",
    email: "squarecorner@gmail.com",
    image:
      "https://img.freepik.com/premium-photo/pharmacy-interior-with-shelves-medicines-products_808092-21.jpg",
    description:
      "Square Medicine Corner ensures the highest standard of pharmacy service with genuine medicines and experienced staff.",
    medicines: [
      {
        id: 1,
        name: "Seclo",
        activeIngredient: "Omeprazole 20mg",
        groupName: "Antacid",
        discount: 5,
        pharmacy: "Square Medicine Corner",
        prices: { piece: 55, strip: 550 },
        image: "https://medex.com.bd/storage/images/packaging/seclo-20-mg-capsule-86285846171-i1-lUXWj4eP5tZMT3MfhLGJ.jpg",
      },
      {
        id: 2,
        name: "Pantocid",
        activeIngredient: "Pantoprazole 40mg",
        groupName: "Antacid",
        discount: 10,
        pharmacy: "Eskayef Medicine Center",
        prices: { piece: 65, strip: 650 },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhbDgEy7G7o7fx1fCMjr8QeGD5MOAPvm21A&s",
      },
      {
        id: 3,
        name: "Nexium",
        activeIngredient: "Esomeprazole 40mg",
        groupName: "Antacid",
        discount: 8,
        pharmacy: "Astra Pharmacy",
        prices: { piece: 75, strip: 750 },
        image: "https://www.binsina.ae/media/catalog/product/4/7/47305_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600",
      },
      {
        id: 4,
        name: "Losec",
        activeIngredient: "Omeprazole 20mg",
        groupName: "Antacid",
        discount: 5,
        pharmacy: "Health Care Pharmacy",
        prices: { piece: 60, strip: 600 },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU205xau9Z7BZ7PejVLDK8wRfouZdtZK7SBQ&s",
      },
      {
        id: 5,
        name: "Omeprazole",
        activeIngredient: "Omeprazole 20mg",
        groupName: "Antacid",
        discount: 0,
        pharmacy: "Generic Medicine Corner",
        prices: { piece: 50, strip: 500 },
        image: "https://www.epharma.com.bd/wp-content/uploads/2022/07/Omeprazole-20mg.jpg",
      },
      {
        id: 6,
        name: "Omeprol",
        activeIngredient: "Omeprazole 20mg",
        groupName: "Antacid",
        discount: 5,
        pharmacy: "Ziska Pharmaceuticals Ltd.",
        prices: { piece: 50, strip: 500 },
        image: "https://medex.com.bd/storage/images/packaging/omeprol-20-mg-capsule-86285846171-i1-lUXWj4eP5tZMT3MfhLGJ.jpg",
      },
      {
        id: 7,
        name: "Omez",
        activeIngredient: "Omeprazole 20mg",
        groupName: "Antacid",
        discount: 10,
        pharmacy: "Dr. Reddy's Laboratories",
        prices: { piece: 60, strip: 600 },
        image: "https://dawaadost.com/medicine/omez-20mg-capsule",
      },
      {
        id: 8,
        name: "Nexum",
        activeIngredient: "Esomeprazole 40mg",
        groupName: "Antacid",
        discount: 8,
        pharmacy: "Square Pharmaceuticals Ltd.",
        prices: { piece: 100, strip: 1000 },
        image: "https://epharma.com.bd/en/medicines/gastro/nexum-40mg-10pcs-5560",
      },
      {
        id: 9,
        name: "Losectil",
        activeIngredient: "Omeprazole 20mg",
        groupName: "Antacid",
        discount: 5,
        pharmacy: "Sandoz Pharmaceuticals",
        prices: { piece: 70, strip: 700 },
        image: "https://www.epharma.com.bd/wp-content/uploads/2022/07/Losectil-20mg.jpg",
      },
      {
        id: 10,
        name: "Omepral",
        activeIngredient: "Omeprazole 20mg",
        groupName: "Antacid",
        discount: 0,
        pharmacy: "Renata Limited",
        prices: { piece: 65, strip: 650 },
        image: "https://www.epharma.com.bd/wp-content/uploads/2022/07/Omepral-20mg.jpg",
      }
    ]

  },
};

const PharmacyDetails = () => {
  const { id } = useParams();
  const pharmacy = pharmacyData[id];
  const [search, setSearch] = useState("");

  if (!pharmacy)
    return (
      <div className="text-center py-20 text-gray-500">Pharmacy not found.</div>
    );

  const filteredMedicines = pharmacy.medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* ===== Cover Section ===== */}
      <div className="relative h-72 md:h-80 overflow-hidden shadow-md">
        <img
          src={pharmacy.image}
          alt={pharmacy.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Pharmacy Info */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
            {pharmacy.name}
          </h1>
          <p className="flex items-center justify-center gap-2 text-gray-200 mt-2">
            <FaMapMarkerAlt /> {pharmacy.location}
          </p>
        </div>

        {/* Back Button */}
        <Link
          to="/pharmacies"
          className="absolute top-5 left-5 bg-white/90 hover:bg-white text-emerald-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-md transition"
        >
          <FaArrowLeft /> Back
        </Link>
      </div>

      {/* ===== Main Content ===== */}
      <div className="max-w-7xl mx-auto mt-12">
        {/* Pharmacy Description */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-12">
          <p className="text-gray-700 leading-relaxed text-justify text-[15px]">
            {pharmacy.description}
          </p>

          {/* Contact Info */}
          <div className="mt-8 border-t border-gray-100 pt-6 flex flex-wrap items-center gap-x-10 gap-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <FaPhone className="text-emerald-500" />
              <span className="font-medium">{pharmacy.contact}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-emerald-500" />
              <span className="font-medium">{pharmacy.email}</span>
            </div>
          </div>
        </div>

        {/* ===== Search Medicines ===== */}
        <div className="mb-10">
          <div className="relative max-w-md mx-auto flex items-center gap-3">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="🔍 Search medicines in this pharmacy..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-3 pl-10 pr-4 rounded-2xl border border-emerald-200 bg-white shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 outline-none"
              />
              <FaSearch className="absolute top-3.5 left-3 text-emerald-500" />
            </div>

            {/* ===== New: Add Prescription Button ===== */}
            <button
              type="button"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-3 rounded-2xl shadow-md transition-all duration-300"
              onClick={() => alert('📄 Prescription upload coming soon!')}
            >
              <FaPlus className="text-white" /> Add Prescription
            </button>
          </div>
        </div>

        {/* ===== Medicine Cards ===== */}
        {filteredMedicines.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="relative bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-md hover:shadow-emerald-200 transition-all duration-500 group hover:-translate-y-2 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>

                {/* Image */}
                <div className="relative h-52 flex justify-center items-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                  <img
                    src={med.image}
                    alt={med.name}
                    className="h-44 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  {med.discount > 0 && (
                    <span className="absolute top-3 right-3 bg-emerald-600 text-white text-sm font-semibold px-3 py-[4px] rounded-full shadow-md">
                      Save {med.discount}%
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-emerald-700 transition">
                        {med.name} ({med.activeIngredient})
                        <span className="ml-1 px-2 py-[2px] bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full whitespace-nowrap">
                          {med.groupName}
                        </span>
                      </h3>
                    </div>

                    <a
                      href={`/pharmacy/${encodeURIComponent(med.pharmacy)}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-4"
                    >
                      🏥 {med.pharmacy}
                      <ExternalLink size={14} />
                    </a>

                    <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 p-3 shadow-inner">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-700 font-medium">
                          Unit Price
                        </span>
                        <div>
                          <span className="text-base font-bold text-emerald-700">
                            ৳
                            {(
                              med.prices.piece *
                              (1 - med.discount / 100)
                            ).toFixed(2)}
                          </span>
                          {med.discount > 0 && (
                            <span className="text-gray-400 line-through text-xs ml-1">
                              ৳{med.prices.piece.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 font-medium">
                          Strip Price
                        </span>
                        <div>
                          <span className="text-xl font-extrabold text-emerald-800">
                            ৳
                            {(
                              med.prices.strip *
                              (1 - med.discount / 100)
                            ).toFixed(2)}
                          </span>
                          {med.discount > 0 && (
                            <span className="text-gray-400 line-through text-xs ml-1">
                              ৳{med.prices.strip.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg">
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-16 text-lg">
            😕 No medicines found for “{search}”
          </p>
        )}

        {/* ===== Payment Section (Now Below Medicines) ===== */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
            💳 Payment Options
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* bKash */}
            <div className="flex items-center gap-3 bg-white border border-pink-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex-shrink-0 bg-pink-50 rounded-lg p-2">
                <img
                  src="https://wp.logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png"
                  alt="bKash"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm group-hover:text-pink-600 transition">
                  bKash
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  📞 01711-123456
                </p>
              </div>
            </div>

            {/* Nagad */}
            <div className="flex items-center gap-3 bg-white border border-orange-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex-shrink-0 bg-orange-50 rounded-lg p-2">
                <img
                  src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg"
                  alt="Nagad"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm group-hover:text-orange-600 transition">
                  Nagad
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  📞 01822-654321
                </p>
              </div>
            </div>

            {/* Rocket */}
            <div className="flex items-center gap-3 bg-white border border-purple-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex-shrink-0 bg-purple-50 rounded-lg p-2">
                <img
                  src="https://img.utdstc.com/icon/d66/21b/d6621b10013ac98c8b3b3bc7a03fbf6580b5be6ab5e35898b6a7942177963e90:200"
                  alt="Rocket"
                  className="h-8 w-auto object-contain rounded"
                />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm group-hover:text-purple-600 transition">
                  Rocket
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  📞 01633-987654
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDetails;
