import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";
import "./Products.css";

/* =========================================
   Products Page
========================================= */
const Products = () => {
  const { products, searchQuery } = useAppContext();

  /* ---------- State ---------- */
  const [filteredProducts, setFilteredProducts] = useState([]);

  /* ---------- Effects ---------- */
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = products.filter((product) =>
        product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  /* =========================================
     Render
  ========================================= */
  return (
    <section className="products-wrapper">
      <header className="products-header">
        <h1 className="products-title">All Products</h1>
      </header>

      <div className="products-grid">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
      </div>
    </section>
  );
};

export default Products;