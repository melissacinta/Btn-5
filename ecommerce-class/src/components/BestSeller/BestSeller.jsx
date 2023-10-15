import { best01, best02, best03, best04, best05, best06, best07, best08 } from "../../utils/images";
import BestSellerCard from "./BestSellerCard";

const bestsellers = [best01, best02, best03, best04, best05, best06, best07, best08]
const BestSeller = () => {
  return (
    <section className="bestseller-section">
      <header className="bestseller-header">
        <h4 className="section-subtext section-subHeading">Featured Products</h4>
        <h3 className="section-heading">BESTSELLER PRODUCTS</h3>
        <p className="section-subtext">Problems trying to resolve the conflict between</p>
      </header>
      <div className="bestseller-cards">
        {bestsellers.map((img, i) => <BestSellerCard key={i} image={img} />)}
      </div>
    </section>
  );
}

export default BestSeller;
