import FeaturedProductCard from "./FeaturedProductCard";
import featured01 from '../../assets/images/featured/featured-01.png'
import featured02 from '../../assets/images/featured/featured-02.png'
import featured03 from '../../assets/images/featured/featured-03.png'


const FeaturedProducts = () => {
  return (
    <section className="bestseller-section">
      <header className="featuredProducts-header">
        <h4 className="section-subtext section-subHeading">Practice Advice</h4>
        <h2 className="section-heading">Featured Products</h2>
        <p className="section-subtext">Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics </p>
      </header>
      <div className="featured-cards">
        {featuredProducts.map((product, i) => <FeaturedProductCard key={i} product={product} />)}
      </div>
    </section>
  );
}

export default FeaturedProducts;
const featuredProducts = [
  {
    image: featured01,
    tags: ['Google', 'Trending', 'New'],
    title: `Loudest à la Madison #1 (L'integral)`,
    excerpt: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    isNew: true,
    link: "#"
  },
  {
    image: featured02,
    tags: ['Google', 'Trending', 'New'],
    title: `Loudest à la Madison #1 (L'integral)`,
    excerpt: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    isNew: true,
    link: "#"
  },
  {
    image: featured03,
    tags: ['Google', 'Trending', 'New'],
    title: `Loudest à la Madison #1 (L'integral)`,
    excerpt: "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    isNew: true,
    link: "#"
  }
]
