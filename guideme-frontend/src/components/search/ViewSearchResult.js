const ViewSearchResult = ({ result }) => {
  if (!result) 
    return null;
  if (result.length === 0) {
    return <div>No result found :(</div>
  }
  console.log(result);
  return <div>hi there</div>
}

export default ViewSearchResult;
