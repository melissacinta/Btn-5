import { AiOutlineAreaChart } from 'react-icons/ai'
import { BiAlarm } from 'react-icons/bi'
import PropTypes from "prop-types"
import { BsChevronRight } from 'react-icons/bs'

const FeaturedProductCard = ({ product, bgColor }) => {
  return (
    <div className={`featured-card ${bgColor ?? ""}`}>
      <div className="product-img">
        <img src={product.image} alt={product.title} />
        {product.isNew && <span>NEW</span>}

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
  bgColor: PropTypes.string,
}
export default FeaturedProductCard
