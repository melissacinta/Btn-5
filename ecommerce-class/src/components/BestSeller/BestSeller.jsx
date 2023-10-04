import BestSellerCard from "./BestSellerCard";
import best01 from '../../assets/images/bestseller/best-01.svg'
import best02 from '../../assets/images/bestseller/best-02.svg'
import best03 from '../../assets/images/bestseller/best-03.svg'
import best04 from '../../assets/images/bestseller/best-04.svg'
import best05 from '../../assets/images/bestseller/best-05.svg'
import best06 from '../../assets/images/bestseller/best-06.svg'
import best07 from '../../assets/images/bestseller/best-07.svg'
import best08 from '../../assets/images/bestseller/best-08.svg'

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
