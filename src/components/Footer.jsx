import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-3">SkyMart.</h3>
          <p className="text-sm text-gray-400">
            Everything you need, all in one place. A modern shopping
            experience built for speed and simplicity.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-white">All Products</Link></li>
            <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest deals straight to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SkyMart. Built as a learning project — no real transactions occur.
      </div>
    </footer>
  );
}

export default Footer;
