import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import "./ProductList.css"; // Add this line

const ProductList = () => {
  const { products, fetchProducts, axios } = useAppContext();

  const toggleStock = async (id, inStock) => {
    try {
      const { data } = await axios.post("/api/product/stock", { id, inStock });
      if (data.success) {
        fetchProducts();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.success(error.message);
    }
  };

  return (
    <div className="productlist-wrapper">
      <div className="productlist-container">
        <h2 className="productlist-heading">All Products</h2>
        <div className="productlist-table-wrapper">
          <table className="productlist-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th className="hide-sm">Selling Price</th>
                <th>In Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="product-cell">
                    <div className="product-image-wrapper">
                      <img
                        src={`http://localhost:5000/images/${product.image[0]}`}
                        alt="Product"
                        className="product-image"
                      />
                    </div>
                    <span className="product-name">{product.name}</span>
                  </td>
                  <td>{product.category}</td>
                  <td className="hide-sm">Rs.{product.offerPrice}</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={product.inStock}
                        onChange={() =>
                          toggleStock(product._id, !product.inStock)
                        }
                      />
                      <span className="slider"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
