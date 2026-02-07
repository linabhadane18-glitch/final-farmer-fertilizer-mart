import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import "./Category.css";

const Category = () => {
  const { navigate } = useAppContext();

  return (
    <div className="category-container">
      <p className="category-title">Categories</p>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="category-image"
              loading="lazy"
            />
            <p className="category-text">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;