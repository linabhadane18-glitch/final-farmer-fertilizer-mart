import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
import "./BestSeller.css";

const BestSeller = () => {
  const { products } = useAppContext();

  const bestSellers = products.slice(0, 8);

  return (
    <section className="best-bg">
      <div className="best-wrapper">
        <div className="best-header">
          <span className="best-badge">🌾 Top Products</span>
          <h2>Best Sellers</h2>
          <p>
            Farmers trust these products the most for better yield and soil
            health.
          </p>
        </div>

        {bestSellers.length === 0 ? (
          <p className="best-empty">
            No best sellers available right now.
          </p>
        ) : (
          <div className="best-grid">
            {bestSellers.map((product) => (
              <ProductCard
                key={product._id || product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
