import { Link } from "react-router-dom";
import Listing from "../components/Listing";
import './homePage.css';

import data from "../Data.json";

export default function HomePage() {
  return (
    <div className="listingList">
      {data.listings.map(({ id, image, name, price, stocked }) => {
        return (
          <Link to={`/listing/${id}`} style={{ textDecoration: 'none' }}>
            <Listing image={image} name={name} price={price} stocked={stocked === "yes"} />
          </Link>
        );
      })}
    </div>
  );
}
