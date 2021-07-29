import './listing.css';
import { formatPrice } from '../utils';

export default function Listing({ image, name, price, stocked }) {
  return (
    <div className="listingPreview">
      <div className="image">
        <img src={image}></img>
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">{formatPrice(price)}</div>
      </div>
      <div className={"stock" + (stocked ? " stocked" : " unstocked")}>
        {stocked ? "In stock" : "Out of stock"}
      </div>
    </div>
  )
}
