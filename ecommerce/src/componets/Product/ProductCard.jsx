const ProductCard = ({ data }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={data.image} alt="" />
      </div>
      <div className="product-info">
        <h3>{data.name}</h3>
        <div className='product-price_info'>
          <span className='product-category'>{data.category}</span>
          <span className='product-price'>{data.price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
