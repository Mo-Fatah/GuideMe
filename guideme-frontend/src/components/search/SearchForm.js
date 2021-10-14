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
    if (name.trim()) queryParams.name = name.trim();
    if (governorate.trim()) queryParams.governorate = governorate.trim();
    if (city.trim()) queryParams.city = city.trim();
    if (neighborhood.trim()) queryParams.neighborhood = neighborhood.trim();

    search(queryParams);
    setCity(''); setGovern(''); setName(''); setNeighborhood('');
  }

  return (
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
  )
}

export default SearchForm;