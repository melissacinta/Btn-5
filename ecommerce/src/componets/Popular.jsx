import img1 from "../assets/images/img/01.png"
import img2 from "../assets/images/img/02.png"
import img3 from "../assets/images/img/03.png"
import img20 from "../assets/images/img/20.png"
import img18 from "../assets/images/img/18.png"

const Popular = () => {
  const productsArr = [img1, img3, img2, img20]
  return (
    <section className="popular-section">
      <header className="popular-heading">
        <p className="popular-text">Explore new and popular styles</p>
      </header>
      <div className="popular-images">
        <div className="large-img">
          <img src={img18} alt="man with a bag" />
        </div>
        <div className="popular-grid-images">
          {productsArr.map((item, index) => (
            <div key={index}>
              <img src={item} alt={`product image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular
