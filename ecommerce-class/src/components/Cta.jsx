import { ctaMan } from "../utils/images"
import Button from "./Button"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="banner-content">
          <span>SUMMER 2020</span>
          <h1>Vita Classic Product</h1>
          <p>We know how large objects will act, We know how are objects will act, We know</p>
          <div className="cta-btns"><span className="large">$16.48</span><Button text={"ADD TO CART"} size={"small"} /></div>
        </div>
        <div>
          <img src={ctaMan} alt="" />
        </div>
      </div>
      <div className="carousel-control">
        <div className="carousel-left">
          <BsChevronLeft />
        </div>

        <div className="carousel-left">
          <BsChevronRight />
        </div>
      </div>

      <div className="carousel-indicators">
        <div className="carousel-indicator active"></div>
        <div className="carousel-indicator"></div>
      </div>
    </section>
  )
}

export default Cta
