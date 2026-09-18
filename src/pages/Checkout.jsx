import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [payment, setPayment] = useState("upi");
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Order Placed!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          This is a demo checkout — no real payment was processed. Thanks for
          trying SkyMart!
        </p>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <EmptyState
        title="Nothing to check out"
        message="Add some products to your cart first."
        actionLabel="Browse Products"
        actionTo="/products"
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h2 className="font-semibold text-gray-800 dark:text-white mb-4">
              Shipping Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
              <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
              <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
              <Input label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} />
              <Input label="Address" name="address" value={form.address} onChange={handleChange} className="sm:col-span-2" />
              <Input label="City" name="city" value={form.city} onChange={handleChange} />
              <Input label="State" name="state" value={form.state} onChange={handleChange} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h2 className="font-semibold text-gray-800 dark:text-white mb-4">
              Payment Method
            </h2>
            <div className="space-y-2">
              {[
                { id: "upi", label: "UPI" },
                { id: "card", label: "Credit / Debit Card" },
                { id: "cod", label: "Cash on Delivery" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-gray-700"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={opt.id}
                    checked={payment === opt.id}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <span className="text-gray-700 dark:text-gray-200 text-sm">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-fit">
          <h2 className="font-semibold text-gray-800 dark:text-white mb-4">Order Summary</h2>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span className="truncate pr-2">{item.title} × {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between font-bold text-gray-900 dark:text-white mb-6">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>
          <Button type="submit" className="w-full">Place Order</Button>
        </div>
      </form>
    </div>
  );
}

function Input({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">{label}</label>
      <input
        {...props}
        required
        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Checkout;
