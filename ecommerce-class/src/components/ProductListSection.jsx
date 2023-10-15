import { useState } from "react";
import {
  best01, best02, best03, best04, best05, best06, best07, best08, best09, best10, best11, best12
} from "../utils/images";
import BestSellerCard from "./BestSeller/BestSellerCard";
import { BsFillGridFill, BsListCheck } from "react-icons/bs";
import Button from "./Button";
const bestsellers = [best01, best02, best03, best04, best05, best06, best07, best08, best09, best10, best11, best12]
const ProductListSection = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="bestseller-section">
      <div className="filters">
        <span className="small">Showing all 12 results</span>
        <div className="views">
          <span>Views:</span>
          <span className="active"><BsFillGridFill /></span>
          <span><BsListCheck /></span>
        </div>
        <div className="right">
          <select name="" id="">
            <option value="popularity">Popularity</option>
          </select>
          <Button text={"Filter"} size={"small"} color={"primary"} />
        </div>
      </div>
      <div className="bestseller-cards">
        {bestsellers.map((img, i) => <BestSellerCard key={i} image={img} />)}
      </div>
      <div className="pagination">

        <button onClick={() => setActive(0)} disabled={active === 0}>First</button>
        {
          [0, 1, 2].map(item => (
            <button key={item}
              className={active === item ? "pagination-active" : ""}
              onClick={() => setActive(item)}>
              {item + 1}
            </button>
          ))
        }
        <button
          onClick={() => setActive(2)}
          disabled={active === 2}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductListSection;
