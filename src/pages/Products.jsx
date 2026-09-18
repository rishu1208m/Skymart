import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products, { categories } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
  { value: "name-asc", label: "Name: A to Z" },
];

function Products() {
  
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [sortBy, setSortBy] = useState("default");

  
  const filteredProducts = useMemo(() => {
    let result = products;

    
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(query));
    }

    
    result = [...result];

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sortBy === "name-asc") result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [search, category, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        All Products
      </h1>

      
      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default Products;
