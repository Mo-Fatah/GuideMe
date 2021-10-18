import { Button, TextField } from "@mui/material";
import { useState } from "react";
    
const SearchForm = ({ search }) => {
  const [ name, setName ] = useState('');
  const [ governorate, setGovern ] = useState('');
  const [ city, setCity ] = useState('');
  const [ neighborhood, setNeighborhood ] = useState('');
  const [ foodType, setFoodType ] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = {}
    if (name.trim()) queryParams.name = name.toLowerCase().trim();
    if (governorate.trim()) queryParams.governorate = governorate.toLowerCase().trim();
    if (city.trim()) queryParams.city = city.toLowerCase().trim();
    if (neighborhood.trim()) queryParams.neighborhood = neighborhood.toLowerCase().trim();

    search(queryParams);
    setCity(''); setGovern(''); setName(''); setNeighborhood('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        label='Name'
        value={name}
        variant="outlined"
        onChange={({target}) => setName(target.value)}
      />
      <TextField 
        label='Governorate'
        value={governorate}
        variant="outlined"
        onChange={({target}) => setGovern(target.value)}
      />
      <TextField 
        label='City'
        value={city}
        variant="outlined"
        onChange={({target}) => setCity(target.value)}
      />
      <TextField 
        label='Neighborhood'
        value={neighborhood}
        variant="outlined"
        onChange={({target}) => setNeighborhood(target.value)}
      />
      <br/>

      <Button type='submit'
        variant='contained'
        style={{marginTop:9, background:'##B8545B'}}
      >
        search
      </Button>
    </form>  
   
  )
  /*return (
    <form onSubmit={ handleSubmit }>
      <div>
        name
        <input 
          value = {name}
          onChange = {({target}) => setName(target.value)}
        />
      </div>
      <div>
        governorate
        <input 
          value = {governorate}
          onChange = {({target}) => setGovern(target.value)}
        />
      </div>
      <div>
        city
        <input 
          value = {city}
          onChange = {({ target }) => setCity(target.value)}
        />
      </div>
      <div>
        Neighborhood
        <input 
          value = {neighborhood}
          onChange = {({ target }) => setNeighborhood(target.value)}
        />
      </div>
      <button type='submit'>search</button>
    </form>
  )*/
}

export default SearchForm;