import { useState, React } from 'react';
import {
  TextField, Button, Alert, Typography,
} from '@mui/material';
import { addNewRest } from '../../services/food';

const AddNewRest = () => {
  const [name, setName] = useState('');
  const [governorate, setGovern] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [address, setAddress] = useState('');
  const [foodTypes, setFoodTypes] = useState([]);
  const [foodType, setFoodType] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (!city.trim() || !name.trim() || !governorate.trim() || !neighborhood.trim()
    || !address.trim() || foodTypes.length === 0) {
      setError('pleae fill the missing fields');
      return;
    }

    const restaurant = {
      name,
      governorate,
      city,
      neighborhood,
      address,
      foodTypes,
    };

    await addNewRest(restaurant);

    setName('');
    setGovern('');
    setCity('');
    setAddress('');
    setFoodType('');
    setNeighborhood('');
    setFoodTypes([]);
    setMessage(`Thanks for Your Contribution! you can find ${restaurant.name} now in the search result`);
  };

  const addType = (event) => {
    event.preventDefault();
    setFoodTypes(foodTypes.concat(foodType));
    setFoodType('');
  };

  return (
    <div>
      <Typography variant="h2" align="center">
        Add a New Restaurant
      </Typography>

      { error
        ? (
          <Alert severity="error">
            {error}
          </Alert>
        )
        : null }
      { message
        ? (
          <Alert severity="success">
            {message}
          </Alert>
        )
        : null }

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          variant="outlined"
          onChange={({ target }) => setName(target.value)}
        />
        <br />
        <TextField
          label="Governorate"
          value={governorate}
          variant="outlined"
          onChange={({ target }) => setGovern(target.value)}
        />
        <br />
        <TextField
          label="City"
          value={city}
          variant="outlined"
          onChange={({ target }) => setCity(target.value)}
        />
        <br />
        <TextField
          label="Neighbothood"
          value={neighborhood}
          variant="outlined"
          onChange={({ target }) => setNeighborhood(target.value)}
        />
        <br />
        <TextField
          label="Adress"
          value={address}
          variant="outlined"
          onChange={({ target }) => setAddress(target.value)}
        />
        <br />
        <TextField
          label="FoodTypes"
          value={foodType}
          variant="outlined"
          onChange={({ target }) => setFoodType(target.value)}
        />
        <Button onClick={addType} sx={{ margin: 2 }}>Add Type</Button>
        <br />
        {foodTypes.toString()}
        <br />
        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddNewRest;
