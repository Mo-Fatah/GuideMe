import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import StyledButton from './Layout/StyledButtons';
import ColorButton from './Layout/ColorButton';

const images = [
  {
    url: './food.jpg',
    title: 'Food',
    width: '34%',
    disabled: false,
  },
  {
    title: 'Car Rental (available soon)',
    width: '33%',
    disabled: true,
  },
  {
    title: 'Hotel (available soon)',
    width: '33%',
    disabled: true,
  },
];

const Home = () => (
  <div>
    <Typography variant="h1" align="center" marginTop={5}>
      GuideMe
    </Typography>
    <Typography variant="subtitle1" align="center" paddingBottom={5}>
      A community-driven application to help you
      find the best services in any place you go
    </Typography>
    <main>
      <StyledButton images={images} />
      <Typography variant="h5">
        Help our community to grow!
      </Typography>
      <br />
      <ColorButton
        component={Link}
        path="/new-restaurant"
        text="Add Restaurant"
        color="success"
      />
    </main>
  </div>
);

export default Home;
