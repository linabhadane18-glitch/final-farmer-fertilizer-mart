import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { products, navigate, addToCart } = useAppContext();
  const { id } = useParams();
  const [thumbnail, setThumbnail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const product = products.find((product) => product._id === id);

  useEffect(() => {
    if (products.length > 0 && product) {
      const productsCopy = products.filter(
        (p) => p.category === product.category && p._id !== product._id
      );
      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products, product]);

  useEffect(() => {
    if (product?.image?.[0]) {
      setThumbnail(product.image[0]);
    }
  }, [product]);

  return (
    product && (
      <div className="single-product">
        <p className="breadcrumb">
          <Link to="/">Home</Link>/<Link to="/products"> Products</Link>/
          <Link to={`/products/${product.category.toLowerCase()}`}>
            {" "}
            {product.category}
          </Link>
          /<span className="highlight"> {product.name}</span>
        </p>

        <div className="product-container">
          <div className="product-images">
            <div className="thumbnails">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="thumbnail"
                >
                  <img
                    src={`http://localhost:5000/images/${image}`}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="main-image">
              <img
                src={`http://localhost:5000/images/${thumbnail}`}
                alt="Selected product"
              />
            </div>
          </div>

          <div className="product-details">
            <h1 className="product-name">{product.name}</h1>

            <div className="rating">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < product.rating
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    alt="star"
                    className="star"
                  />
                ))}
              <p className="rating-count">({product.rating})</p>
            </div>

            <div className="pricing">
              <p className="price-original"><img src={assets.rupees} alt="rupees" />{product.price}</p>
              <p className="price-offer"><img src={assets.rupees} alt="rupees" />{product.offerPrice}</p>
              <span className="tax-info">(inclusive of all taxes)</span>
            </div>

            <p className="section-title">About Product</p>
            <ul className="description-list">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div className="buttons">
              <button
                onClick={() => addToCart(product._id)}
                className="btn add"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(product._id);
                  navigate("/cart");
                  scrollTo(0, 0);
                }}
                className="btn buy"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>

        <div className="related-section">
          <div className="section-header">
            <p className="section-title">Related Products</p>
            <div className="underline" />
          </div>

          <div className="related-grid">
            {relatedProducts
              .filter((product) => product.inStock)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>

          <button
            onClick={() => {
              navigate("/products");
              scrollTo(0, 0);
            }}
            className="btn buy see-more"
          >
            See More
          </button>
        </div>
      </div>
    )
  );
};

export default SingleProduct;
