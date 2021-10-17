import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardHeader, IconButton, Button } from '@mui/material'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const RestaurantCard = ({ restaurant }) => {
  const rate = 10;
  return (
    <div>
      <Card elevation={3} style={{marginBottom:10}}>
        <CardHeader
          title={<Typography variant='h4' color="#240063" gutterBottom>
            {restaurant.name.toUpperCase()}
          </Typography>}
          subheader={`Rate: ${rate}`}
        >
        </CardHeader>
        <CardContent>

          <Typography variant='body1' color='black'>
            {`Address: ${restaurant.governorate.toUpperCase()}, ${restaurant.neighborhood.toUpperCase()}`}
          </Typography>
          
          <Button component={Link} to ={`/food/${restaurant.id}`}>
            View Reviews
          </Button>

        </CardContent>
      </Card> 
    </div>
  )


  /*return ( 
    <div>
      {
        <li>
          <Link to={`/food/${restaurant.id}`} > {restaurant.name} </Link>
        </li>
      }
    </div>
  )*/
}

export default RestaurantCard;