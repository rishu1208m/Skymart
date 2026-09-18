import { Link } from "react-router-dom";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import products, { categories } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import CategoryCard from "../components/CategoryCard";
import Button from "../components/Button";

const whyChooseUs = [
  { icon: Truck, title: "Fast Delivery", text: "Get your orders in 2-3 business days." },
  { icon: ShieldCheck, title: "Secure Shopping", text: "Your data is always protected." },
  { icon: RotateCcw, title: "Easy Returns", text: "30-day hassle-free return policy." },
  { icon: Headphones, title: "24/7 Support", text: "We're here whenever you need us." },
];

function Home() {
  const featured = products.slice(0, 8);

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
            Everything You Need, All in One Place.
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Discover thousands of products across electronics, fashion, home,
            sports, and books — all at prices you'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/products">
              <Button className="w-full sm:w-auto">Shop Now</Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white/10">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <section className="py-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat} category={cat} />
            ))}
          </div>
        </section>

        
        <section className="py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Featured Products
            </h2>
            <Link to="/products" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              View all →
            </Link>
          </div>
          <ProductGrid products={featured} />
        </section>

        
        <section className="py-6">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Season Sale — Up to 40% Off
            </h3>
            <p className="mb-6 text-orange-100">
              Limited time offer on selected electronics and fashion items.
            </p>
            <Link to="/products">
              <Button className="!bg-white !text-orange-600 hover:!bg-orange-50">
                Grab the Deal
              </Button>
            </Link>
          </div>
        </section>

        
        <section className="py-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Why Choose SkyMart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
                <Icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
