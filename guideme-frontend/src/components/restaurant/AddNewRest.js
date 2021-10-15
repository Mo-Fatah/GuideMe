import { useState } from "react";
import { addNewRest } from "../../services/food";

const AddNewRest = () => {
  const [ name, setName ] = useState('');
  const [ governorate, setGovern ] = useState('');
  const [ city, setCity ] = useState('');
  const [ neighborhood, setNeighborhood ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ foodTypes, setFoodTypes ] = useState([]);
  const [ foodType, setFoodType ] = useState('');
  const [ message, setMessage ] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!city.trim() || !name.trim() || !governorate.trim() || !neighborhood.trim()
    || !address.trim() || foodTypes.length === 0) {
      setMessage('pleae fill the missing fields');
      setTimeout(() => {
        setMessage(null);
      }, 3000)
    }

    const restaurant = {
      name,
      governorate,
      city,
      neighborhood,
      address,
      foodTypes,
    }

    await addNewRest(restaurant);

  }


  const addType = (event) => {
    event.preventDefault();
    setFoodTypes(foodTypes.concat(foodType));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input 
            value = {name}
            onChange = { ({target}) => setName(target.value)}
          />
        </div>
        <div>
          governorate:
          <input
            value = {governorate}
            onChange = { ({target}) => setGovern(target.value) }
          />
        </div>
        <div>
          city: 
          <input 
            value = {city}
            onChange = { ({target}) => setCity(target.value)}
          />
        </div>
        <div>
          neighborhood
          <input 
            value = {neighborhood}
            onChange = { ({target}) => setNeighborhood(target.value)}
          />
        </div>
        <div>
          address:
          <input 
            value = {address}
            onChange = { ({target}) => setAddress(target.value) }
          />
        </div>
        <div>
          foodTypes:
          <input 
            value = {foodType}
            onChange = { ({target}) => setFoodType(target.value)}
          />
          <button onClick={addType}>add type</button>
          <br/>
          {foodTypes.toString()}
        </div>
        {message}
        <button type='submit'>Add Restaurant</button>
      </form>
    </div>
  ) 
}

export default AddNewRest;