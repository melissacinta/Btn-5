import Banner from "../components/Banner";
import Header from "../components/Header/Header";
import EditorPick from "../components/EditorPick";
import BestSeller from "../components/BestSeller/BestSeller";
import CtaTwo from "../components/CtaTwo";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProduct/FeaturedProduct";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <EditorPick />
      <BestSeller />
      {/* <Cta /> */}
      <CtaTwo />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default HomePage;
