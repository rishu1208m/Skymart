import { Link } from "react-router-dom";

const categoryImages = {
  Electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
  Fashion: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
  Home: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400",
  Sports: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400",
  Books: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
};

function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${category}`}
      className="group relative rounded-xl overflow-hidden h-32 sm:h-40 block"
    >
      <img
        src={categoryImages[category]}
        alt={category}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <span className="text-white font-semibold text-lg">{category}</span>
      </div>
    </Link>
  );
}

export default CategoryCard;
