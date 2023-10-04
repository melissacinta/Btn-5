import { useState } from 'react'
import { CartIcon, MenuIcon, SearchIcon } from '../../utils/icons'
const menuItems = [{ text: 'Home', href: '#' }, { text: 'Product', href: '#' }, { text: 'Pricing', href: '#' }, { text: 'Contact', href: '#' }]
const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <nav className='mobile-nav'>
        <div className="top-bar">
          <span>Bandage</span>
          <div className='top-bar_btns'>
            <button><SearchIcon /></button>
            <button><CartIcon /></button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}><MenuIcon /></button>
          </div>
        </div>
        <ul className={isMenuOpen ? "nav-links-ul" : "hidden"}>
          {menuItems.map((menuItem, i) => <li key={i}>
            <a href={menuItem.href}>{menuItem.text}</a>
          </li>)}
        </ul>
      </nav>
    </div>
  )
}

export default MobileHeader
