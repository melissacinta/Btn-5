import { brand1, brand2, brand3, brand4, brand5, brand6 } from "../utils/images";

const Clients = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <section className='clients'>{brands.map((brand, i) => <img src={brand} alt="client image" key={i} />)}</section>
  )
}

export default Clients
