import Button from "./Button";

const CtaTwo = () => {
  return (
    <section className='ctaTwo-section'>
      <header className="ctaTwo-header">
        <h4 className="section-subtext section-subHeading">SUMMER 2020</h4>
        <h2 className="section-heading">Part of the
          Neural
          Universe</h2>
        <p className="section-subtext">We know how large objects will act, but things on a small scale.</p>
        <div>
          <Button text="BUY NOW" color="primary" />
          <Button text="Learn More" color="primary-inverse" />
        </div>
      </header>
      <div className='ctaTwo-img-container'>
        <div className="ctaTwo-img">
        </div>
      </div>
    </section>
  );
}

export default CtaTwo;
