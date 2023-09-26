import BottomHeader from "./BottomHeader"
import TopHeader from "./TopHeader"
import shopNowIcon from "../../assets/images/shop-icon.svg"
import banner from "../../assets/images/banner-inage.svg"

const Header = () => {
  return (
    <header className="header">
      <div>
        <TopHeader />
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
