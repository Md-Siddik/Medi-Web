import { useState } from "react";
import { Search, ExternalLink, ShoppingCart } from "lucide-react";
import { useCart } from "../../Components/CartContext";
import CartDrawer from "../../Components/CartDrawer";
import AddToCartModal from "../../Components/AddToCartModal";

const Home = () => {
    const [query, setQuery] = useState("");
    const { addToCart } = useCart();
    const [selectedMed, setSelectedMed] = useState(null);
    const [unit, setUnit] = useState("piece");
    const [qty, setQty] = useState(1);

    const handleAddClick = (med) => {
        setSelectedMed(med); // এই medicine-এর জন্য modal খুলবে
    };

    const closeModal = () => setSelectedMed(null);

    const medicines = [
        {
            id: 1,
            name: "Napa Extra",
            activeIngredient: "Paracetamol 500mg",
            groupName: "Painkiller",
            pharmacy: "Square Pharma",
            discount: 10,
            image: "https://images.othoba.com/images/thumbs/0914239_napa-extra-tablet.webp",
            prices: { piece: 2.5, strip: 30 },
        },
        {
            id: 2,
            name: "Seclo 20mg",
            activeIngredient: "Omeprazole 20mg",
            groupName: "Antacid",
            pharmacy: "Square Pharma",
            discount: 5,
            image: "https://medex.com.bd/storage/images/packaging/seclo-20-mg-capsule-86285846171-i1-lUXWj4eP5tZMT3MfhLGJ.jpg",
            prices: { piece: 5.5, strip: 55 },
        },
        {
            id: 3,
            name: "Zithromax 500mg",
            activeIngredient: "Azithromycin 500mg",
            groupName: "Antibiotic",
            pharmacy: "ACI Limited",
            discount: 0,
            image: "https://img500.exportersindia.com/product_images/bc-500/2024/4/13008949/azithromycin-500mg-tablets-1712143696-7366550.jpg",
            prices: { piece: 60, strip: 180 },
        },
        {
            id: 4,
            name: "Ace Plus",
            activeIngredient: "Paracetamol & Caffeine",
            groupName: "Painkiller",
            pharmacy: "Square Pharma",
            discount: 8,
            image: "https://medex.com.bd/storage/images/packaging/ace-plus-500-mg-tablet-94190812997-i1-262BmBeqPiu3RGuLpLNF.jpg",
            prices: { piece: 1.5, strip: 15 },
        },
        {
            id: 5,
            name: "Cipro 250mg",
            activeIngredient: "Ciprofloxacin 250mg",
            groupName: "Antibiotic",
            pharmacy: "Incepta Pharma",
            discount: 12,
            image: "https://example.com/cipro-250mg.jpg",
            prices: { piece: 4, strip: 40 },
        },
        {
            id: 6,
            name: "Amoxil",
            activeIngredient: "Amoxicillin 500mg",
            groupName: "Antibiotic",
            pharmacy: "Beximco Pharma",
            discount: 7,
            image: "https://example.com/amoxil.jpg",
            prices: { piece: 3.5, strip: 35 },
        },
        {
            id: 7,
            name: "Vitamin C",
            activeIngredient: "Ascorbic Acid 500mg",
            groupName: "Vitamin",
            pharmacy: "Square Pharma",
            discount: 0,
            image: "https://example.com/vitamin-c.jpg",
            prices: { piece: 1, strip: 10 },
        },
        {
            id: 8,
            name: "Paracetamol",
            activeIngredient: "Paracetamol 500mg",
            groupName: "Painkiller",
            pharmacy: "Renata Limited",
            discount: 3,
            image: "https://example.com/paracetamol.jpg",
            prices: { piece: 2, strip: 20 },
        },
        {
            id: 9,
            name: "Metformin",
            activeIngredient: "Metformin 500mg",
            groupName: "Diabetes",
            pharmacy: "ACI Limited",
            discount: 5,
            image: "https://example.com/metformin.jpg",
            prices: { piece: 3.2, strip: 32 },
        },
        {
            id: 10,
            name: "Amlodipine",
            activeIngredient: "Amlodipine 5mg",
            groupName: "Blood Pressure",
            pharmacy: "Incepta Pharma",
            discount: 4,
            image: "https://example.com/amlodipine.jpg",
            prices: { piece: 2.8, strip: 28 },
        },
        {
            id: 11,
            name: "Cetirizine",
            activeIngredient: "Cetirizine 10mg",
            groupName: "Allergy",
            pharmacy: "Beximco Pharma",
            discount: 6,
            image: "https://example.com/cetirizine.jpg",
            prices: { piece: 1.8, strip: 18 },
        },
        {
            id: 12,
            name: "Doxycycline",
            activeIngredient: "Doxycycline 100mg",
            groupName: "Antibiotic",
            pharmacy: "Square Pharma",
            discount: 0,
            image: "https://example.com/doxycycline.jpg",
            prices: { piece: 3, strip: 30 },
        },
    ];

    const filteredMeds = medicines.filter((med) =>
        med.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Your Trusted Online Pharmacy 💊
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Buy authentic medicines from verified pharmacies — with the best
                            prices.
                        </p>

                        {/* Search Bar */}
                        <div className="mt-6 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <Search
                                    size={20}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Search medicine..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Medicine Grid */}
                    {filteredMeds.length > 0 ? (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
                            {filteredMeds.map((med) => (
                                <div
                                    key={med.id}
                                    className="relative bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-md hover:shadow-emerald-200 transition-all duration-500 group hover:-translate-y-2 flex flex-col"
                                >
                                    {/* Hover glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-700 pointer-events-none"></div>

                                    {/* Image Section */}
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
                                            {/* Name + Group */}
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-emerald-700 transition">
                                                    {med.name}({med.activeIngredient})<span className="ml-1 px-2 py-[2px] bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full whitespace-nowrap">
                                                        {med.groupName}
                                                    </span>
                                                </h3>

                                            </div>

                                            {/* Pharmacy name */}
                                            <a
                                                href={`/pharmacy/${encodeURIComponent(med.pharmacy)}`}
                                                className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-4"
                                            >
                                                🏥 {med.pharmacy}
                                                <ExternalLink size={14} />
                                            </a>

                                            {/* Price Section */}
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

                                        {/* Add to Cart Button */}
                                        <button
                                            onClick={() => handleAddClick(med)}
                                            className="w-full mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <ShoppingCart size={16} /> Add to Cart
                                        </button>

                                    </div>
                                </div>
                            ))}
                            {selectedMed && (
                                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-xl shadow-lg p-6 w-96">
                                        <h2 className="text-xl font-bold text-emerald-700 mb-4">
                                            {selectedMed.name}
                                        </h2>

                                        <label className="block text-sm font-medium mb-1">Select unit:</label>
                                        <select className="w-full border rounded-lg p-2 mb-3">
                                            <option>Piece</option>
                                            <option>Strip</option>
                                            <option>Box</option>
                                        </select>

                                        <label className="block text-sm font-medium mb-1">Quantity:</label>
                                        <input
                                            type="number"
                                            className="w-full border rounded-lg p-2 mb-4"
                                            min="1"
                                            defaultValue="1"
                                        />

                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => {
                                                    addToCart(selectedMed, unit, Number(qty));
                                                    closeModal();
                                                }}
                                                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                                            >
                                                Confirm
                                            </button>
                                            <button
                                                onClick={closeModal}
                                                className="text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-100"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mt-20">
                            No medicine found matching “{query}”
                        </p>
                    )}
                </div>
            </div>
            <CartDrawer />
        </>
    );
};

export default Home;
