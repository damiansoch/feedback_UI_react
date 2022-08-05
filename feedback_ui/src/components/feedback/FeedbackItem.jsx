import { useContext } from "react";

import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../shared/card";
import FeedbackContext from "../../context/feedbackContext";

const FeedbackItem = ({ rating, text, id }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color="purple" size="20px" />
      </button>
      <button className="edit">
        <FaEdit
          onClick={() => editFeedback(id, text, rating)}
          color="purple"
          size="20px"
        />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
