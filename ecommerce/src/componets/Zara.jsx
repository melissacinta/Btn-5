import zaraImg from '../assets/images/zara-01.png'
const Zara = () => {
  return (
    <section className="zara-section">
      <div className='zara-opaque'>
        <img src={zaraImg} alt="Zara" />
      </div>
      <div className='zara-content'>
        <header>
          <img src={zaraImg} alt="Zara" />
        </header>
        <p>
          Lustrous yet understated. The new evening
          wear collection exclusively offered at the
          reopened Giorgio Armani boutique in Los
          Angeles.
        </p>
        <div>
          <button>See Collection</button>
        </div>
      </div>
    </section>
  )
}

export default Zara
