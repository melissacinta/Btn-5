const ProductCard = ({ data }) => {
  const { image, name, category, price } = data;
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <div className='product-price_info'>
          <span className='product-category'>{category}</span>
          <span className='product-price'>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
