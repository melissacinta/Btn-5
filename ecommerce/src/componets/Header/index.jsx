import BottomHeader from "./BottomHeader"
import TopHeader from "./TopHeader"
import shopNowIcon from "../../assets/images/shop-icon.svg"
import banner from "../../assets/images/banner-inage.svg"
import searchIcon from '../../assets/images/icon-2.svg'
const Header = ({ headerClass, topHeaderClass }) => {
  return (
    <header className={`header ${headerClass ? headerClass : ""}`}>
      <div>
        <TopHeader className={topHeaderClass} image={searchIcon} />
        <BottomHeader />
      </div>
      <section className="banner">
        <div className="banner-content">
          <h1>Collections</h1>
          <p>you can explore ans shop many differnt collection
            from various barands here.</p>
          <button>
            <img src={shopNowIcon} alt="shop icon" />
            <span>shop now</span>
          </button>
        </div>
        <div className="banner-img-container">
          <img src={banner} alt="banner" />
        </div>
      </section>
    </header>
  )
}

export default Header
