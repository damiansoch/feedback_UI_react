import React from "react";
import FeedbackItem from "../feedback/FeedbackItem";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback Yet!</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem rating={item.rating} text={item.text} key={item.id} />
      ))}
    </div>
  );
};

export default FeedbackList;
