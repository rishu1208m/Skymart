import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <Link to={`/products/${item.id}`} className="shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </Link>

      <div className="flex-1 min-w-0">
        <Link to={`/products/${item.id}`}>
          <h4 className="font-medium text-gray-800 dark:text-gray-100 truncate hover:text-blue-600">
            {item.title}
          </h4>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ₹{item.price.toLocaleString("en-IN")} each
        </p>
      </div>

      <QuantitySelector
        quantity={item.quantity}
        onIncrease={() => increaseQuantity(item.id)}
        onDecrease={() => decreaseQuantity(item.id)}
      />

      <div className="w-24 text-right font-semibold text-gray-800 dark:text-gray-100">
        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default CartItem;
