import searchIcon from '../../assets/images/icon-2.svg'
import shopIcon from '../../assets/images/icon-1.svg'
import accountIcon from '../../assets/images/icon-3.svg'
import logo from '../../assets/images/logo.svg'
const TopHeader = ({ className, image = logo }) => {
  return (
    <div className={`top-header ${className ?? ""}`}>
      <div className="search-container">
        <img src={searchIcon} alt="Search icon" />
      </div>
      <div className="logo-container"><img src={image} alt="Logo" /></div>
      <div className="account-container">
        <button><img src={accountIcon} alt="account" /> <span>Account</span></button>
        <button><img src={shopIcon} alt="shop" /> <span>Shoping</span></button>
      </div>
    </div>
  )
}

export default TopHeader
