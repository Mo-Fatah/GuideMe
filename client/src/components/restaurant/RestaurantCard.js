import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardContent, Typography, CardHeader, Button,
} from '@mui/material';

const RestaurantCard = ({ restaurant }) => (
  <div>
    <Card elevation={3} style={{ marginBottom: 10 }}>
      <CardHeader
        title={(
          <Typography variant="h4" color="#240063" gutterBottom>
            {restaurant.name.toUpperCase()}
          </Typography>
        )}
        subheader={`Rate: ${restaurant.rate ? Number(restaurant.rate).toPrecision(2) : 'no rates yet'}`}
      />
      <CardContent>
        <Typography variant="body1" color="black">
          {`Address: ${restaurant.governorate.toUpperCase()}, ${restaurant.neighborhood.toUpperCase()}`}
        </Typography>
        <Button component={Link} to={`/food/${restaurant.id}`}>
          View Reviews
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default RestaurantCard;
