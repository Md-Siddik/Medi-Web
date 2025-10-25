import { useState } from "react";
import { Search, ExternalLink, ShoppingCart } from "lucide-react";

const Home = () => {
    const [query, setQuery] = useState("");

    const medicines = [
        {
            id: 1,
            name: "Napa Extra (Paracetamol 500mg)",
            prices: { piece: 2.5, strip: 30, box: 330 },
            discount: 10,
            image:
                "https://medex.com.bd/storage/images/packaging/napa-extra-500-mg-tablet-46174620412-i1-S6ON0Cv84Db8DclIKRNt.webp",
            pharmacy: "Square Pharma",
        },
        {
            id: 2,
            name: "Seclo 20mg (Omeprazole)",
            prices: { piece: 5.5, strip: 55, box: 520 },
            discount: 5,
            image:
                "https://medex.com.bd/storage/images/packaging/seclo-20-mg-capsule-86285846171-i1-lUXWj4eP5tZMT3MfhLGJ.jpg",
            pharmacy: "Square Pharma",
        },
        {
            id: 3,
            name: "Zithromax 500mg (Azithromycin)",
            prices: { piece: 60, strip: 180, box: 1700 },
            discount: 15,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5V4GoJnt5n2MPklVtxXdlG2fs8gRkS1om7w&s",
            pharmacy: "ACI Limited",
        },
        {
            id: 4,
            name: "Ace Plus (Paracetamol & Caffeine)",
            prices: { piece: 1.5, strip: 15, box: 140 },
            discount: 8,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSY6NkKdUlD0qxNGfBEqtWfNnKdascJVYBlQ&s",
            pharmacy: "Square Pharma",
        },
        {
            id: 5,
            name: "Antacid Suspension (Mint Flavor)",
            prices: { piece: 10, strip: 95, box: 900 },
            discount: 10,
            image:
                "https://medex.com.bd/storage/images/packaging/digene-liquid-mint-200-ml-74718494123-i1-jDZZ0JplS0z6fXn6p3vS.webp",
            pharmacy: "Incepta Pharma",
        },
        {
            id: 6,
            name: "Vitamin C Tablets 1000mg",
            prices: { piece: 11, strip: 110, box: 1000 },
            discount: 12,
            image:
                "https://medex.com.bd/storage/images/packaging/ceevit-250-mg-tablet-41329167725-i1-LZbAM4ykx05IPJryN8Tu.webp",
            pharmacy: "PharmaLife",
        },
        {
            id: 7,
            name: "Napa Syrup (Paracetamol Suspension)",
            prices: { piece: 35, strip: 0, box: 400 },
            discount: 7,
            image:
                "https://medex.com.bd/storage/images/packaging/napa-syrup-60ml-58774414710-i1-wqvB0PjN0cKqSGHTKkLV.webp",
            pharmacy: "Square Pharma",
        },
        {
            id: 8,
            name: "Losectil 20mg (Omeprazole)",
            prices: { piece: 5, strip: 50, box: 480 },
            discount: 10,
            image:
                "https://medex.com.bd/storage/images/packaging/losectil-20-mg-capsule-72376013265-i1-d6ZsoFxmm6m4bREk8JrU.webp",
            pharmacy: "Eskayef Pharma",
        },
        {
            id: 9,
            name: "Ceevit 250mg (Vitamin C)",
            prices: { piece: 3, strip: 30, box: 280 },
            discount: 5,
            image:
                "https://medex.com.bd/storage/images/packaging/ceevit-250-mg-tablet-41329167725-i1-LZbAM4ykx05IPJryN8Tu.webp",
            pharmacy: "Square Pharma",
        },
        {
            id: 10,
            name: "Amdocal 5mg (Amlodipine)",
            prices: { piece: 8, strip: 80, box: 750 },
            discount: 6,
            image:
                "https://medex.com.bd/storage/images/packaging/amdocal-5-mg-tablet-50740137383-i1-N0stLgNUuSEwZyWSeRnX.webp",
            pharmacy: "Square Pharma",
        },
        {
            id: 11,
            name: "Loratin 10mg (Cetirizine)",
            prices: { piece: 2.5, strip: 25, box: 240 },
            discount: 8,
            image:
                "https://medex.com.bd/storage/images/packaging/loratin-10-mg-tablet-57066434347-i1-Kt5QZVNzDA4G0TPjvHfV.webp",
            pharmacy: "ACI Limited",
        },
        {
            id: 12,
            name: "Losectil 40mg (Omeprazole)",
            prices: { piece: 8.5, strip: 85, box: 790 },
            discount: 10,
            image:
                "https://medex.com.bd/storage/images/packaging/losectil-40-mg-capsule-81436381778-i1-tSMe9Z0mUzMuHsy8p5nC.webp",
            pharmacy: "Eskayef Pharma",
        },
    ];

    const filteredMeds = medicines.filter((med) =>
        med.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Your Trusted Online Pharmacy 💊
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Buy authentic medicines from verified pharmacies — with the best prices.
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
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredMeds.map((med) => {
                            const discountedPiece =
                                med.prices.piece * (1 - med.discount / 100);
                            const discountedStrip =
                                med.prices.strip * (1 - med.discount / 100);

                            return (
                                <div
                                    key={med.id}
                                    className="relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-2"
                                >
                                    {/* Glow border effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/20 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />

                                    {/* Image */}
                                    <div className="relative bg-gradient-to-b from-gray-50 to-white flex justify-center items-center h-48 overflow-hidden">
                                        <img
                                            src={med.image}
                                            alt={med.name}
                                            className="h-44 object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                            Save {med.discount}%
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 relative z-10">
                                        <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-1">
                                            {med.name}
                                        </h3>

                                        <a
                                            href={`/pharmacy/${encodeURIComponent(med.pharmacy)}`}
                                            className="text-sm text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 mb-3"
                                        >
                                            {med.pharmacy} <ExternalLink size={14} />
                                        </a>

                                        {/* Price Section */}
                                        <div className="mt-2 mb-4 space-y-1 text-sm">
                                            <p className="text-gray-600">
                                                Unit Price:{" "}
                                                <span className="font-medium text-gray-800">
                                                    ৳{discountedPiece.toFixed(2)}
                                                </span>{" "}
                                                <span className="text-gray-400">
                                                    ({(med.prices.strip / med.prices.piece).toFixed(0)}×
                                                    {med.prices.piece.toFixed(2)} = ৳
                                                    {discountedStrip.toFixed(2)})
                                                </span>
                                            </p>

                                            <p className="text-gray-600">
                                                Strip Price:{" "}
                                                <span className="font-semibold text-emerald-600">
                                                    ৳{discountedStrip.toFixed(2)}
                                                </span>{" "}
                                                <span className="text-gray-400 line-through ml-1">
                                                    ৳{med.prices.strip.toFixed(2)}
                                                </span>
                                            </p>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-emerald-700 transition shadow-md hover:shadow-emerald-200">
                                            <ShoppingCart size={16} /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-20">
                        No medicine found matching “{query}”
                    </p>
                )}
            </div>
        </div>
    );
};

export default Home;
