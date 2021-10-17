import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getById } from "../../services/food";
import Reviews from "../reviews/Reviews";

const RestaurantView = () => {
  const id = useParams().id;
  const [ restaurant, setRestaurant ] = useState(null);
 
  useEffect(() => {
    const fetchRestaurant = async () => {
      const result = await getById(id);
      setRestaurant(result);
    }
    fetchRestaurant(); 
  }, []); //eslint-disable-line 
  
  if (!restaurant) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Typography variant='h1' marginTop={2} marginLeft={2} >
        {restaurant.name.toUpperCase()}
      </Typography>
      <Box sx={{marginLeft: 3, marginBottom: 2, borderBottom:1}}>
        <Typography variant='subtitle1'>
          {restaurant.governorate.toUpperCase()} 
          {', '}
          {restaurant.city.toUpperCase()}
          {', '}
          {restaurant.neighborhood.toUpperCase()}
        </Typography>
      </Box>
      <Box sx={{borderBottom:1}}>
        <Typography variant='h5' >
          Food Types:
        </Typography> 
        <ul>
          {restaurant.foodTypes.map(type => <li>{type}</li>)}
        </ul>
      </Box>
      <div>
        <Reviews initialReviews={restaurant.reviews} id={restaurant.id}/>
      </div>
    </div>
  )
}

export default RestaurantView;