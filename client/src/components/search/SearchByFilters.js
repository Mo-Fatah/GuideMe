import { useState, React } from 'react';
import { Typography, Alert } from '@mui/material';
import SearchForm from './SearchForm';
import { getAllRests } from '../../services/food';
import ViewSearchResult from './ViewSearchResult';

const SearchByFilters = () => {
  const [searchResult, setSearchResult] = useState(null);

  const SearchQuery = async (params) => {
    const restaurants = await getAllRests(params);
    setSearchResult(restaurants);
  };
  if (!searchResult) {
    SearchQuery(null);
  }

  return (
    <div>
      <Typography variant="h2" style={{ margin: 6 }}>
        Search for Restaurants by location
      </Typography>
      <Alert severity="info" style={{ marginBottom: 10 }}>
        All fields are optional
      </Alert>

      <SearchForm search={SearchQuery} />
      <ViewSearchResult result={searchResult} />
    </div>
  );
};

export default SearchByFilters;
