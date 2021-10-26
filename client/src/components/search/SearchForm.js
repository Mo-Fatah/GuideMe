import { Button, TextField } from '@mui/material';
import { useState, React } from 'react';

const SearchForm = ({ search }) => {
  const [name, setName] = useState('');
  const [governorate, setGovern] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = {};
    if (name.trim()) queryParams.name = name.toLowerCase().trim();
    if (governorate.trim()) queryParams.governorate = governorate.toLowerCase().trim();
    if (city.trim()) queryParams.city = city.toLowerCase().trim();
    if (neighborhood.trim()) queryParams.neighborhood = neighborhood.toLowerCase().trim();

    search(queryParams);
    setCity(''); setGovern(''); setName(''); setNeighborhood('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        variant="outlined"
        onChange={({ target }) => setName(target.value)}
      />
      <TextField
        label="Governorate"
        value={governorate}
        variant="outlined"
        onChange={({ target }) => setGovern(target.value)}
      />
      <TextField
        label="City"
        value={city}
        variant="outlined"
        onChange={({ target }) => setCity(target.value)}
      />
      <TextField
        label="Neighborhood"
        value={neighborhood}
        variant="outlined"
        onChange={({ target }) => setNeighborhood(target.value)}
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        style={{ marginTop: 9, background: '##B8545B' }}
      >
        search
      </Button>
    </form>
  );
};

export default SearchForm;
