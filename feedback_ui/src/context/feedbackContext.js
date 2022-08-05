import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import FeedbackData from "../data/data";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (id) => {
    console.log(id);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback, //short for feedback:feedback
        deleteFeedback,
        addFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
