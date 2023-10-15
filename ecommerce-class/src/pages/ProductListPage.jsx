import BreadCrumb from "../components/BreadCrumb";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ProductListSection from "../components/ProductListSection";
import ShowCase from "../components/ShowCase";

const ProductListPage = () => {
  return (
    <>
      <Header bgColor={"green"} />
      <BreadCrumb title={"Shop"} link={"/"} currentPage={"Shop"} />
      <ShowCase />
      <ProductListSection />
      <Clients />
      <Footer bgColor={"bg-white"} />
    </>
  );
}

export default ProductListPage;
