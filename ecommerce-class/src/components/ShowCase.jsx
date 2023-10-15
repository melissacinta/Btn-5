import { showcase01, showcase02, showcase03, showcase04, showcase05 } from "../utils/images";
const showcaseImgs = [showcase01, showcase02, showcase03, showcase04, showcase05]
const ShowCase = () => {
  return (
    <div className="showcase">
      {showcaseImgs.map((item, i) => <div key={i} className="showcase-card" style={{ backgroundImage: `linear-gradient(180deg, #21212140, #21212140), url(${item})` }}>
        <span>CLOTHS</span>
        <span>5 Items</span>
      </div>)}
    </div>
  );
}

export default ShowCase;
