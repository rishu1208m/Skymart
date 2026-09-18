import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";
import { PackageSearch } from "lucide-react";

function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={PackageSearch}
        title="No products found"
        message="Try adjusting your search or filters."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
