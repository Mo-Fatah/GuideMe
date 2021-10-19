import React from 'react';
import RestaurantCard from '../restaurant/RestaurantCard';

const ViewSearchResult = ({ result }) => {
  if (!result) {
    return null;
  }

  if (result.length === 0) {
    return <div>No result found :(</div>;
  }
  return (
    <div>
      <ul>
        {result.map((rest) => <RestaurantCard key={rest.id} restaurant={rest} />)}
      </ul>
    </div>
  );
};

export default ViewSearchResult;
