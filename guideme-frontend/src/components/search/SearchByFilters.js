import SearchForm from "./SearchForm";
import { getAllRests } from "../../services/food";
import { useState } from "react";
import ViewSearchResult from "./ViewSearchResult";      

const SearchByFilters = () => {
  const [ searchResult, setSearchResult ] = useState(null);

  const SearchQuery = async params => {
    const restaurants = await getAllRests(params);
    setSearchResult(restaurants);
  }

  return (
    <div>
      <SearchForm search ={ SearchQuery }/>
      <ViewSearchResult result = {searchResult}/>
    </div>
  ) 
 
}

export default SearchByFilters;