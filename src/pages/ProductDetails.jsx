import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, ArrowLeft } from "lucide-react";
import products from "../data/products";
import QuantitySelector from "../components/QuantitySelector";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
 
  const { id } = useParams();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <EmptyState
        title="Product not found"
        message="The product you're looking for doesn't exist."
        actionLabel="Back to Products"
        actionTo="/products"
      />
    );
  }

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Link
        to="/products"
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 mb-6"
      >
        <ArrowLeft size={16} /> Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-2xl object-cover max-h-[420px]"
        />

        <div>
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {product.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-1 mb-3">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span>{product.rating}</span>
            </div>
            <span className="text-gray-400">·</span>
            <span>{product.reviews} reviews</span>
            <span className="text-gray-400">·</span>
            <span className={product.stock > 0 ? "text-green-600" : "text-red-500"}>
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>

          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ₹{product.price.toLocaleString("en-IN")}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">Quantity</span>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity((q) => q + 1)}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => addToCart(product, quantity)}
              className="flex-1"
              disabled={product.stock === 0}
            >
              Add to Cart
            </Button>
            <Button
              variant={inWishlist ? "danger" : "secondary"}
              onClick={() => toggleWishlist(product)}
              className="flex items-center justify-center gap-2 flex-1"
            >
              <Heart size={16} className={inWishlist ? "fill-white" : ""} />
              {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
