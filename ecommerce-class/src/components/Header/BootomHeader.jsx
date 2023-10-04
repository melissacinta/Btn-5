import { CartIconBlue, DownIcon, HeartIconBlue, SearchIconBlue, UserIconBlue } from "../../utils/icons"

const navigation = [
  { text: "Home", href: "#", hasChildren: false },
  {
    text: "Shop", href: "#", hasChildren: true
  }, {
    text: "About", href: "#", hasChildren: false
  }, { text: "Blog", href: "#", hasChildren: false },
  {
    text: "Contact", href: "#", hasChildren: false
  }, { text: "Pages", href: "#", hasChildren: false },]

const BootomHeader = () => {
  return (
    <div className="bottom-header">
      <span className="logo">Bandage</span>
      <nav className="nav-left">
        <ul>
          {navigation.map((navItem) => <li key={navItem.text} className={navItem.hasChildren ? "has-children" : ""}>
            <a href={navItem.href}>{navItem.text} {navItem.hasChildren && <DownIcon />}</a>
          </li>)}
        </ul>
      </nav>
      <nav className="nav-right">
        <ul>
          <li className="has-children">
            <a href="#"><UserIconBlue /> Login / Register</a>
          </li>
          <li>
            <a href=""><SearchIconBlue /></a>
          </li>
          <li className="has-children">
            <a href=""><CartIconBlue /> <span>1</span></a>
          </li>
          <li className="has-children">
            <a href=""><HeartIconBlue /> <span>1</span></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default BootomHeader
