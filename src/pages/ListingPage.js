import { useParams } from 'react-router-dom'
import Review from '../components/Review';
import { getListingById } from '../utils';

import './listingPage.css';

export default function ListingPage() {

  const { id } = useParams();

  const listing = getListingById(id);

  return (
    <div className="listingDetails">
      <div className="info">
        <div className="title">{listing.name}</div>
        <div className="tags">Tags: {listing.tags.join(", ")}</div>
        <div className="description">{listing.description}</div>
        <div className="reviewsText">Reviews</div>
        <div className="reviews">
          {listing.reviews.map(({content, author, posted}) => {
            return (
              <Review content={content} author={author} posted={posted}></Review>
            )
          })}
        </div>
      </div>
      <div className="image">
        <img src={"." + listing.image}></img>
      </div>
    </div>
  )

}
