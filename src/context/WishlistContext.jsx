import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem("skymart-wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("skymart-wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  function isInWishlist(id) {
    return wishlistItems.some((item) => item.id === id);
  }

  function toggleWishlist(product) {
    setWishlistItems((prev) =>
      isInWishlist(product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product],
    );
  }

  function removeFromWishlist(id) {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  }

  const value = {
    wishlistItems,
    isInWishlist,
    toggleWishlist,
    removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
