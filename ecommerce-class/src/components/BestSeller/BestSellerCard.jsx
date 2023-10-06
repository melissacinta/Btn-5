import PropTypes from "prop-types"

const colors = ["--primary-color", "--secondary-color-1", "--alert-color", "--dark-background-color"]
const BestSellerCard = ({ image }) => {
  return (
    <div className='card'>
      <div>
        <img src={image} alt="" />
      </div>
      <div className='card-info'>
        <h5 className='title'>Graphic Design</h5>
        <a href="#">English Department</a>
        <h5 className='prices'>
          <span>$16.48</span>
          <span>$6.48</span>
        </h5>
        <div className='colors'>
          {colors.map(color => <Eclipse key={color} color={color} />)}
        </div>
      </div>
    </div>
  )
}

export default BestSellerCard

const Eclipse = ({ color }) => {
  return (
    <div className="eclipse" style={{ backgroundColor: `var(${color})` }}>
    </div>
  )
}
BestSellerCard.propTypes = {
  image: PropTypes.string.isRequired,
}

Eclipse.propTypes = {
  color: PropTypes.string.isRequired,
}
