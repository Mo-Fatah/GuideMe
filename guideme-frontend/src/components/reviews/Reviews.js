import { useState } from 'react'
import AddReview from './AddReview'
const Reviews = ({ initialReviews, id }) => {
  const [ reviews, setReviews ] = useState(initialReviews); 
  return (
    <div>
      <h3>Reviews: </h3>
      <ul>
        { 
          reviews.length === 0 ? 
            <p>No reviews yet</p>
          : reviews.map((review) => <Review key={review.id} review={review}  />) 
        }    
      </ul>
      <br/>
      { window.localStorage.getItem('Guideme-app-user') 
        && <AddReview id={id} reviews={reviews} setReviews={setReviews}/>}
    </div>
  )
} 

const Review = ({ review }) => {
  return (
    <li>
      <h4>{review.title}</h4>
      <p>{review.user.username} : {review.content}</p>
      <p>{review.rate}</p>
    </li>
  ) 
}

export default Reviews;