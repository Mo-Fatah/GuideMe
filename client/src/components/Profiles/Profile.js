import { React, useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import ReviewCard from '../reviews/ReviewCard';
import { getUser } from '../../services/user';

const Profile = () => {
  const savedUser = JSON.parse(window.localStorage.getItem('Guideme-app-user'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await getUser(savedUser.id);
      setUser(result);
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Typography variant="h2" align="center">
        {user.username}
      </Typography>
      <Typography variant="h5">
        Reviews Posted By You:
      </Typography>
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

export default Profile;
