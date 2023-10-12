import Clients from "./componets/Clients"
import Footer from "./componets/Footer"
import Header from "./componets/Header"
import Popular from "./componets/Popular"
import Products from "./componets/Product"
import Zara from "./componets/Zara"


function App() {

  return (
    <div>
      <Header headerClass={"block blue"} topHeaderClass={"bluish"} />
      <Clients />
      <Popular />
      <Products />
      <Zara />
      <Footer />
    </div>
  )
}

export default App
