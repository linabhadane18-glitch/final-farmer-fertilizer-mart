import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter-bg">
      <div className="newsletter-card">
        <div className="newsletter-left">
          <span className="newsletter-badge">🌾 Farmer Specials</span>
          <h2>Get Fresh Deals & Crop Offers</h2>
          <p>
            Subscribe to receive weekly updates on fertilizers, seeds, tools,
            and exclusive discounts trusted by farmers across India.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          <div className="newsletter-perks">
            <span>🌱 Weekly Product Tips</span>
            <span>🚜 Farming Deals</span>
            <span>💰 Member Discounts</span>
          </div>
        </div>

        <div className="newsletter-right">
          <h3>Why Join?</h3>
          <ul>
            <li>✔ Best fertilizer recommendations</li>
            <li>✔ Seasonal crop guidance</li>
            <li>✔ Early access to offers</li>
            <li>✔ Trusted by farmers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
