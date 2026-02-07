import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import "./ProductCategory.css";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div className="category-wrapper">
      {searchCategory && (
        <div className="category-header">
          <h1 className="category-title">
            {searchCategory.text.toUpperCase()}
          </h1>
        </div>
      )}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <h1 className="category-title">No products found</h1>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
