import brand1 from '../assets/images/brand/01.svg';
import brand2 from '../assets/images/brand/02.svg';
import brand3 from '../assets/images/brand/03.svg';
import brand4 from '../assets/images/brand/04.svg';
import brand5 from '../assets/images/brand/02.svg';
const Clients = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <section className='clients'>{brands.map((brand, i) => <img src={brand} alt="client image" key={i} />)}</section>
  )
}

export default Clients
