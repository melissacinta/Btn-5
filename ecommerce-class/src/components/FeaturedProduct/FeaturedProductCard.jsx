import { AiOutlineAreaChart } from 'react-icons/ai'
import { BiAlarm } from 'react-icons/bi'
import PropTypes from "prop-types"
import { BsChevronRight } from 'react-icons/bs'

const FeaturedProductCard = ({ product }) => {
  return (
    <div className='featured-card'>
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className='product-info'>
        <div className='tags'>
          {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <h5 className='title'>{product.title}</h5>
        <p>{product.excerpt}</p>
        <div className='stats'>
          <span><BiAlarm className='icon-primary' />{product.date}</span>
          <span><AiOutlineAreaChart className="icon-success" />{product.comments}</span>
        </div>
        <a href={product.link} className='product-link'>Learn More
          <BsChevronRight className='icon-primary' /></a>
      </div>

    </div>
  )
}
FeaturedProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}
export default FeaturedProductCard
