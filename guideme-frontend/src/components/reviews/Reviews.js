import { useState } from 'react'
import AddReview from './AddReview'
const Reviews = ({ initialReviews, id }) => {
  const [ reviews, setReviews ] = useState(initialReviews); 
  return (
    <div>
      <ul>
        {reviews ? reviews.map((review) => <Review key={review.id} review={review}  />) : null }    
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
      <h3>{review.title}</h3>
      <p>{review.user.username} : {review.content}</p>
      <p>{review.rate}</p>
    </li>
  ) 
}

export default Reviews;