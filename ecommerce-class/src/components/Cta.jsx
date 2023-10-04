import Button from "./Button"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const Cta = () => {
  return (
    <section className="banner-section">
      <div className="banner-content">
        <span>SUMMER 2020</span>
        <h1>NEW
          COLLECTION</h1>
        <p>We know how large objects
          will act, but things on a
          small scale.</p>
        <Button text={"SHOP NOW"} />
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
