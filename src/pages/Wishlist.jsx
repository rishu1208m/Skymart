import { Link } from "react-router-dom";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import EmptyState from "../components/EmptyState";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <EmptyState
        icon={Heart}
        title="Your wishlist is empty"
        message="Save items you love so you can find them later."
        actionLabel="Browse Products"
        actionTo="/products"
      />
    );
  }

  function moveToCart(item) {
    addToCart(item);
    removeFromWishlist(item.id);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Your Wishlist ({wishlistItems.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4"
          >
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
            </Link>
            <div className="flex-1 min-w-0">
              <Link to={`/products/${item.id}`}>
                <h4 className="font-medium text-gray-800 dark:text-gray-100 truncate hover:text-blue-600">
                  {item.title}
                </h4>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            </div>
            <button
              onClick={() => moveToCart(item)}
              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg"
              aria-label="Move to cart"
              title="Move to cart"
            >
              <ShoppingCart size={18} />
            </button>
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="p-2 text-gray-400 hover:text-red-500 rounded-lg"
              aria-label="Remove"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
