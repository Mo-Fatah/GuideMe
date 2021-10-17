import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { addReview } from "../../services/review";

const AddReview = ({ id, reviews, setReviews }) => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ rate, setRate ] = useState(0);
  const [ message, setMessage ] = useState(null);
  const user = JSON.parse(window.localStorage.getItem('Guideme-app-user')).username;
  
  const handleSubmission = async (event) => {
    event.preventDefault();
    
    if (title.length < 1 || content.length < 1) {
      setMessage('please a write a meaningful title and content');  
      setTimeout(() => {
        setMessage(null);
      }, 3000)
      return;
    }
    if (rate < 1 || rate > 10) {
      setMessage('rate should be between 1 and 10 inclusive');
      setTimeout(() => {
        setMessage(null);
      }, 3000)
      return;
    }

    const newReview = {
      title,
      user,
      content,
      rate,
    }
    const result = await addReview(newReview, id);
    console.log(result);
    setTitle(''); 
    setContent('');
    setMessage('');
    setRate(0);
    setReviews(reviews.concat(result));
  }
  
  return (
    <div>
      <Box sx={{marginTop:5,paddingTop:2,marginBottom:3, borderTop:1}}>
        <Typography variant='h4' >
          You have an experience with this restaurant ? Help others with your review!
        </Typography>
      </Box>
      <Box sx={{marginBottom:10}}>
        <form onSubmit={handleSubmission}>
          <TextField
            label='title'
            value={title}
            variant='outlined'
            onChange={({target}) => setTitle(target.value)}
          />
          <TextField
            label='content'
            value={content}
            variant='outlined'
            onChange={({target}) => setContent(target.value)}
          />
          <TextField
            label='rate'
            value={rate}
            variant='outlined'
            onChange={({target}) => setRate(target.value)}
          />
          {message}<br/>
          <Button type='submit'
            color='success'
            variant='contained'
            sx={{marginTop:2}} 
          >
            Submit
          </Button>

        </form>
      </Box>
    </div>
  )
}

export default AddReview;