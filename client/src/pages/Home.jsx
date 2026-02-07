import AnimatedBanner from "../components/AnimatedBanner";
import BestSeller from "../components/BestSeller";
import Category from "../components/Category";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="mt-10">
      <AnimatedBanner />
      <Category />
      <BestSeller />
      <NewsLetter />
    </div>
  );
};
export default Home;