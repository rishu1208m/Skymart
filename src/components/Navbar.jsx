import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X, Moon, Sun } from "lucide-react";
import SearchBar from "./SearchBar";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { totalQuantity } = useCart();
  const { wishlistItems } = useWishlist();
  const { theme, toggleTheme } = useTheme();

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(search)}`;
    }
  }

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="text-xl font-bold text-blue-600 shrink-0">
            SkyMart<span className="text-gray-800 dark:text-white">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <form onSubmit={handleSearchSubmit} className="hidden md:block flex-1 max-w-xs">
            <SearchBar value={search} onChange={setSearch} />
          </form>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/wishlist"
              className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ShoppingCart size={20} />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <form onSubmit={handleSearchSubmit}>
              <SearchBar value={search} onChange={setSearch} />
            </form>
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
