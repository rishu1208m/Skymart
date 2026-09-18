import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";

function Cart() {
  const { cartItems, totalQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <EmptyState
        icon={ShoppingCart}
        title="Your cart is empty"
        message="Looks like you haven't added anything yet."
        actionLabel="Browse Products"
        actionTo="/products"
      />
    );
  }

  const shipping = totalPrice > 2000 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Your Cart ({totalQuantity} {totalQuantity === 1 ? "item" : "items"})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button
            onClick={clearCart}
            className="mt-4 text-sm text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-fit">
          <h2 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">
            Order Summary
          </h2>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 flex justify-between font-bold text-gray-900 dark:text-white">
            <span>Total</span>
            <span>₹{grandTotal.toLocaleString("en-IN")}</span>
          </div>
          <Link to="/checkout">
            <Button className="w-full mt-6">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
