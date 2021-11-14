import {
  Card, CardContent, CardHeader, Typography, Button,
} from '@mui/material';
import { useState, React } from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
  const [showMin, setShowFull] = useState(true);

  const toggleShow = () => {
    setShowFull(!showMin);
  };

  const fullText = () => (
    <Button onClick={toggleShow}> collapse </Button>
  );
  const hide = () => (
    <Button onClick={toggleShow}> full text </Button>
  );

  return (
    <Card elevation={3} style={{ marginBottom: 5, maxWidth: 400 }}>
      <CardHeader
        title={review.title}
        subheader={`${review.rate}/10`}
        style={{ margin: 0, paddingBottom: 0 }}
      />
      <CardContent>
        <Typography
          variant="body1"
          noWrap={showMin}
          fontSize={20}
        >
          {review.content}
        </Typography>
        {showMin ? hide() : fullText()}

        <Typography variant="subtitle1" fontSize={15}>
          By:
          <Button component={Link} to={`/user/${review.user.id}`}>
            {review.user.username}
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
