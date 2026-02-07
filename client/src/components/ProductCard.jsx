import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return (
    product && (
      <div
        className="agri-card"
        onClick={() => {
          navigate(
            `/product/${product.category.toLowerCase()}/${product?._id}`
          );
          scrollTo(0, 0);
        }}
      >
        {/* Image */}
        <div className="agri-image-box">
          <img
            src={`http://localhost:5000/images/${product.image[0]}`}
            alt={product.name}
          />
          <span className="agri-category">{product.category}</span>
        </div>

        {/* Content */}
        <div className="agri-content">
          <p className="agri-name">{product.name}</p>

          <div className="agri-rating">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="star"
                />
              ))}
            <span>4.0</span>
          </div>

          <div className="agri-bottom">
            <div className="agri-price">
              ₹{product.offerPrice}
              <span>₹{product.price}</span>
            </div>

            <div
              className="agri-cart"
              onClick={(e) => e.stopPropagation()}
            >
              {!cartItems?.[product?._id] ? (
                <button
                  onClick={() => addToCart(product?._id)}
                  className="agri-add-btn"
                >
                  🌾 Add
                </button>
              ) : (
                <div className="agri-counter">
                  <button
                    onClick={() => removeFromCart(product?._id)}
                  >
                    −
                  </button>
                  <span>{cartItems[product?._id]}</span>
                  <button
                    onClick={() => addToCart(product?._id)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
