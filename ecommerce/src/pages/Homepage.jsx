import Clients from "../componets/Clients"
import Footer from "../componets/Footer"
import Header from "../componets/Header"
import Popular from "../componets/Popular"
import Products from "../componets/Product"

const Homepage = () => {
  return (
    <div>
      <Header />
      <Clients />
      <Popular />
      <Products />
      <Footer />
    </div>
  )
}

export default Homepage
