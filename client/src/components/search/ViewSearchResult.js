import React from 'react';
import RestaurantCard from '../restaurant/RestaurantCard';

const ViewSearchResult = ({ result }) => {
  if (!result) {
    return null;
  }
  if (result.length === 0) {
    return <div>No result found :(</div>;
  }
  const sortedResult = result.sort((r1, r2) => r2.rate - r1.rate);
  return (
    <div>
      <ul>
        {sortedResult.map((rest) => <RestaurantCard key={rest.id} restaurant={rest} />)}
      </ul>
    </div>
  );
};

export default ViewSearchResult;
