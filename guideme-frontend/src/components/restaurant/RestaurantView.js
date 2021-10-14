import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getById } from "../../services/food";
import Reviews from "../reviews/Reviews";

const RestaurantView = () => {
  const id = useParams().id;
  const [ restaurant, setRestaurant ] = useState(null);
 
  useEffect(  () => {
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
      <h1>{restaurant.name}</h1>
      <p>Address: {restaurant.address}</p>
      <p> Food Types: 
        <ul>
          {restaurant.foodTypes.map(type => <li>{type}</li>)}
        </ul>
      </p>
      <div>
        <Reviews reviews={restaurant.reviews} id={restaurant.id}/>
      </div>
    </div>
  )
}

export default RestaurantView;