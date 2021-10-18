import { Typography, TextField, Button, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { addReview } from "../../services/review";

const AddReview = ({ id, reviews, setReviews }) => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ rate, setRate ] = useState(0);
  const [ success, setSuccess ] = useState(false);
  const [ error, setError ] = useState(null);
  const user = JSON.parse(window.localStorage.getItem('Guideme-app-user')).username;
  
  const handleSubmission = async (event) => {
    event.preventDefault();
    setSuccess(false);
    setError(null);

    if (title.length < 1 || content.length < 1) {
      setError('please write a meaningful title and content');  
      return;
    }
    if ( !(Number(rate)) || rate < 1 || rate > 10) {
      setError('rate should be a number between 1 and 10 inclusive');
      return;
    }

    const newReview = {
      title,
      user,
      content,
      rate,
    }
    const result = await addReview(newReview, id);
    setTitle(''); 
    setContent('');
    setRate(0);
    setReviews(reviews.concat(result));
    setSuccess(true);
  }
  
  return (
    <div>
      <Box sx={{marginTop:5,paddingTop:2,marginBottom:3, borderTop:1}}>
        <Typography variant='h4' >
          You have an experience with this restaurant ? Help others with your review!
        </Typography>
      </Box>
      { error ?
        <Alert severity='error' style={{marginBottom: 10}}>
          {error}
        </Alert>
        : null
      }
      { success ?
        <Alert severity='success'>
          Thanks for your Contribution!
        </Alert>
        : null
      }
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
            multiline
            rows={4}
            fullWidth
            style={{marginTop:12, marginBottom:12}}
            onChange={({target}) => setContent(target.value)}
          />
          <TextField
            label='rate (out of 10)'
            value={rate}
            variant='outlined'
            onChange={({target}) => setRate(target.value)}
          />
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