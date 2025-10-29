import { useState } from "react";
import { useCart } from "./CartContext";
import { ShoppingCart, X } from "lucide-react";

const CartDrawer = () => {
  const { cart, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);

  // 💳 Payment method handler
  const handlePayment = (pharmacy) => {
    const method = window.prompt(
      `Select payment method for ${pharmacy}:\n1 = Cash on Delivery\n2 = Hand to Hand Cash`
    );
    if (method === "1") {
      alert(`✅ Cash on Delivery selected for ${pharmacy}`);
    } else if (method === "2") {
      alert(`🏪 Hand to Hand Cash selected for ${pharmacy}`);
    } else {
      alert("❌ Invalid option, please try again.");
    }
  };

  // 🧮 Pharmacy-wise total
  const calculatePharmacyTotal = (pharmacyItems) => {
    return pharmacyItems.reduce((sum, item) => {
      const unitPrice = item.prices[item.unit] || 0;
      return sum + unitPrice * item.quantity;
    }, 0);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <ShoppingCart size={22} />
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="bg-white w-96 h-full shadow-xl p-6 overflow-y-auto relative">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold mb-4 text-emerald-700">
              🛒 Your Cart
            </h2>

            {/* Empty cart message */}
            {Object.keys(cart).length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              Object.keys(cart).map((pharmacy) => {
                const pharmacyItems = cart[pharmacy];
                const total = calculatePharmacyTotal(pharmacyItems);

                return (
                  <div key={pharmacy} className="mb-6 border-b pb-4">
                    {/* Pharmacy name */}
                    <h3 className="font-semibold text-gray-800 mb-2">
                      🏥 {pharmacy}
                    </h3>

                    {/* Medicine list */}
                    <div className="space-y-3">
                      {pharmacyItems.map((item) => (
                        <div
                          key={`${item.id}-${item.unit}`}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-contain"
                            />
                            <div>
                              <p className="font-medium text-gray-800 text-sm">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                Qty: {item.quantity} × ৳
                                {item.prices[item.unit].toFixed(2)} ={" "}
                                <span className="font-semibold text-emerald-700">
                                  ৳
                                  {(
                                    item.prices[item.unit] * item.quantity
                                  ).toFixed(2)}
                                </span>
                              </p>
                              <p className="text-[10px] text-gray-400">
                                ({item.unit})
                              </p>
                            </div>
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => removeFromCart(pharmacy, item.id)}
                            className="text-red-500 text-sm font-semibold"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Total per pharmacy */}
                    <div className="mt-3 text-right text-sm font-semibold text-gray-700">
                      Total:{" "}
                      <span className="text-emerald-700">
                        ৳{total.toFixed(2)}
                      </span>
                    </div>

                    {/* Proceed button */}
                    <button
                      onClick={() => handlePayment(pharmacy)}
                      className="w-full mt-3 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                    >
                      Proceed to Pay ({pharmacy})
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
