import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);

  //Calculate rating avg
  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats;
