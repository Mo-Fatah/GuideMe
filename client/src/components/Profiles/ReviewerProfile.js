import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Typography, Container, Grid } from '@mui/material';
import ReviewCard from '../reviews/ReviewCard';
import { getUser } from '../../services/user';

const ReviewerProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await getUser(id);
      setUser(result);
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>loading..</div>;
  }
  return (
    <div>
      <Typography variant="h2" align="center">
        {user.username}
      </Typography>
      <Typography variant="h5">
        Reviews Posted By
        {` ${user.username}`}
      </Typography>
      <br />
      <Container sx={{ marginBottom: 5 }}>
        <Grid container spacing={2}>
          {
            user.postedReviews.map((review) => (
              <Grid item key={review.id} xs={12} md={6} lg={4}>
                <ReviewCard review={review} profile />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </div>
  );
};

export default ReviewerProfile;
