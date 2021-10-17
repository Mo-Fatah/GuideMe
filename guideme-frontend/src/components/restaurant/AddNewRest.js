import { useState } from "react";
import { addNewRest } from "../../services/food";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@mui/material";
const AddNewRest = () => {
  const [ name, setName ] = useState('');
  const [ governorate, setGovern ] = useState('');
  const [ city, setCity ] = useState('');
  const [ neighborhood, setNeighborhood ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ foodTypes, setFoodTypes ] = useState([]);
  const [ foodType, setFoodType ] = useState('');
  const [ message, setMessage ] = useState(null);
  const history = useHistory();

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
    
    setName('');
    setGovern('');
    setCity('');
    setAddress('');
    setFoodType('');
    setFoodTypes([]);
    setMessage(`Thanks for Your Contribution! You will be Directed to the home page`);
    setTimeout(() => {
      setMessage(null);
      history.push('/');
    }, 2000);
  }

  const addType = (event) => {
    event.preventDefault();
    setFoodTypes(foodTypes.concat(foodType));
    setFoodType('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField 
          label='Name'
          value={name}
          variant='outlined'
          onChange= {({target}) => setName(target.value)}
        />
        <br/>
        <TextField 
          label='Governorate'
          value={governorate}
          variant='outlined'
          onChange= {({target}) => setGovern(target.value)}
        />
        <br/>
        <TextField 
          label='City'
          value={city}
          variant='outlined'
          onChange= {({target}) => setCity(target.value)}
        />
        <br/>
        <TextField 
          label='Neighbothood'
          value={neighborhood}
          variant='outlined'
          onChange= {({target}) => setNeighborhood(target.value)}
        />
        <br/>
         <TextField 
          label='Adress'
          value={address}
          variant='outlined'
          onChange= {({target}) => setAddress(target.value)}
        />
        <br/>
        <TextField 
          label='FoodTypes'
          value={foodType}
          variant='outlined'
          onChange= {({target}) => setFoodType(target.value)}
        />
        <Button onClick={addType} sx={{margin:2}}>Add Type</Button>
      
        <br/>
        {foodTypes.toString()}
        {message}
        <br />
        <Button type='submit'
          color='success'
          variant='contained'
          sx={{marginTop:2}} 
        >
          Submit
        </Button>
      </form>
    </div>
  ) 
}

export default AddNewRest;