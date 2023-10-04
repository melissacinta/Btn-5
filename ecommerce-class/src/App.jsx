import Banner from './components/Banner'
import BestSeller from './components/BestSeller/BestSeller'
// import Cta from './components/Cta'
import CtaTwo from './components/CtaTwo'
import EditorPick from './components/EditorPick'
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct'
import Footer from './components/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <EditorPick />
      <BestSeller />
      {/* <Cta /> */}
      <CtaTwo />
      <FeaturedProduct />
      <Footer />
    </>
  )
}

export default App
