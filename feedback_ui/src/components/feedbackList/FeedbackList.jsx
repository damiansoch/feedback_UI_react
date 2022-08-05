import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import FeedbackItem from '../feedback/FeedbackItem';
import FeedbackContext from '../../context/feedbackContext';

const FeedbackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback Yet!</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.6 } }}
            exit={{ scale: 0, transition: { duration: 0.6 } }}
          >
            <FeedbackItem
              rating={item.rating}
              text={item.text}
              key={item.id}
              id={item.id}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
