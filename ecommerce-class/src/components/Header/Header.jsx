import BootomHeader from './BootomHeader'
import MobileHeader from './MobileHeader'
import TopHeader from './TopHeader'
import PropTypes from 'prop-types'

const Header = ({ bgColor }) => {
  return (
    <div>
      <MobileHeader />
      <TopHeader bgColor={bgColor} />
      <BootomHeader />
    </div>
  )
}

export default Header

Header.propTypes = {
  bgColor: PropTypes.string
}
