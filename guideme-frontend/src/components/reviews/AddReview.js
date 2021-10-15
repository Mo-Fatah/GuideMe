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

    if (rate < 1 || rate > 10) {
      setMessage('rate should be between 1 and 10 inclusive');
      setTimeout(() => {
        setMessage(null);
      }, 3000)
      return;
    }
    if (title.length < 1 || content.length < 1) {
      setMessage('please a write a meaningful title and content');  
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
      <h3>You have an experience with this restaurant ? help others with your review!</h3>
      <form onSubmit={handleSubmission}>
        <div>
          review title : 
          <input 
            value = {title}
            onChange = { ({target}) => setTitle(target.value) }
          />
        </div>
        <div>
          your review :
          <input 
            value = {content}
            onChange = { ({target}) => setContent(target.value) }
          />
        </div>
        <div>
          rate (from 1 to 10):
          <input
            value = {rate}
            onChange = { ({target}) => setRate(target.value) }
          /> 
        </div>
        {message}
        <button type='submit'>submit review</button>
      </form>
    </div>
  )
}

export default AddReview;