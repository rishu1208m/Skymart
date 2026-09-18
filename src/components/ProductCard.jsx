import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 p-2 rounded-full shadow hover:scale-110 transition-transform"
          aria-label="Toggle wishlist"
        >
          <Heart
            size={18}
            className={inWishlist ? "fill-red-500 text-red-500" : "text-gray-500"}
          />
        </button>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">
          {product.category}
        </span>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-1 hover:text-blue-600 dark:hover:text-blue-400">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2 text-sm text-gray-500 dark:text-gray-400">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span>{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-lg transition-colors"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
