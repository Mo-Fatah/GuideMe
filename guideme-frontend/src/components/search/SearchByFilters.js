import SearchForm from "./SearchForm";
import { getAllRests } from "../../services/food";
import { useState } from "react";
import ViewSearchResult from "./ViewSearchResult";      
import { Typography, Alert } from "@mui/material";

const SearchByFilters = () => {
  const [ searchResult, setSearchResult ] = useState(null);

  const SearchQuery = async params => {
    const restaurants = await getAllRests(params);
    setSearchResult(restaurants);
  }

  return (
    <div>
      <Typography variant='h2' style={{margin:6}}>
        Search for Restaurants by location
      </Typography>
      <Alert severity="info" style={{marginBottom:10}}>
        All fields are optional. If you want all restaurants leave search fields empty
      </Alert>

      <SearchForm search ={ SearchQuery }/>
      <ViewSearchResult result = {searchResult}/>
    </div>
  ) 
 
}

export default SearchByFilters;