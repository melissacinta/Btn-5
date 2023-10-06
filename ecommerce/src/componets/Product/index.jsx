import { products } from "../../utils/mockData"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <section className='product-section'>
      <h2>Or subscribe to the newsletter</h2>
      <div className="product-filters">
        <nav className="product-categories">
          <button>...</button>
          <ul>
            <li>
              <a href="#" className="active">all products</a>
            </li>
            <li>
              <a href="#">t-shirt</a>
            </li>
            <li>
              <a href="#">hoodies</a>
            </li>

            <li>
              <a href="#">jackets</a>
            </li>
          </ul>
        </nav>
        <div>
          <button>
            Filter
          </button>
        </div>
      </div>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element) => (
        <NumberComponent key={element} data={element} />
      ))}

      <div className="product-gallery">
        {products.map((item) => (
          <ProductCard key={item.name} data={item} />
        ))}
      </div>
    </section>
  )
}
export default Products
const NumberComponent = ({ data }) => {
  return (
    <div>{data}</div>
  )
}
