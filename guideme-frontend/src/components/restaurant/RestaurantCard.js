import { Link } from "react-router-dom";
const RestaurantCard = ({ restaurant }) => {
  return ( 
    <div>
      {
        <li>
          <Link to={`/food/${restaurant.id}`} > {restaurant.name} </Link>
        </li>
      }
    </div>
  )
}

export default RestaurantCard;