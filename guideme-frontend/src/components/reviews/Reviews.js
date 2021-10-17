import { Container, Grid, Typography } from '@mui/material';
import { useState } from 'react'
import AddReview from './AddReview'
import ReviewCard from './ReviewCard';
const Reviews = ({ initialReviews, id }) => {
  const [ reviews, setReviews ] = useState(initialReviews); 
  return (
    <div>
      <Typography variant='h4' marginBottom={2} marginTop={3}>
        Reviews: 
      </Typography> 
      {
        reviews.length === 0 ? 
          <p>No reviews yet</p>
        : <Container sx={{marginBottom:5}} >
            <Grid container spacing={2}>
              {reviews.map((review) => 
                <Grid item key={review.id} xs={12} md={6} lg={4}>
                  <ReviewCard review={review}  />
                </Grid>
              )}
            </Grid> 
          </Container>
      }
      { window.localStorage.getItem('Guideme-app-user') 
        && <AddReview id={id} reviews={reviews} setReviews={setReviews}/>}
    </div>
  )
} 


export default Reviews;