import { Button, TextField } from '@mui/material';
import { useState, React } from 'react';

const SearchForm = ({ search }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const queryParams = {};
    if (name.trim()) queryParams.name = name.toLowerCase().trim();
    if (city.trim()) queryParams.city = city.toLowerCase().trim();
    await search(queryParams);
    setCity('');
    setName('');
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
        label="City"
        value={city}
        variant="outlined"
        onChange={({ target }) => setCity(target.value)}
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
