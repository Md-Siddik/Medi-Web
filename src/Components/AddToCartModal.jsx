import React, { useState } from "react";
import { useCart } from "./CartContext";

const MedicineModal = ({ selectedMed, onClose }) => {
  const { addToCart } = useCart();
  const [selectedUnit, setSelectedUnit] = useState("piece");
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    addToCart(selectedMed, selectedUnit, quantity);
    onClose(); // modal বন্ধ করার জন্য কল
  };

  return (
    <div className="modal">
      <h2>{selectedMed.name}</h2>
      <label>
        Select unit:
        <select
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          <option value="piece">Piece</option>
          <option value="strip">Strip</option>
        </select>
      </label>

      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </label>

      <button onClick={handleConfirm} className="confirm-btn">
        Confirm
      </button>
      <button onClick={onClose} className="cancel-btn">
        Cancel
      </button>
    </div>
  );
};

export default MedicineModal;
