import FeedbackContext from '../../context/feedbackContext';
import { useContext } from 'react';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const feedbackNumber = feedback.length;

  let avarage = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);
  avarage = (avarage / feedbackNumber).toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedbackNumber} Reviews</h4>
      <h4>Average rating: {isNaN(avarage) ? null : avarage}</h4>
    </div>
  );
};

export default FeedbackStats;
