import { FaTimes } from "react-icons/fa";
import Card from "../shared/card";

const FeedbackItem = ({ rating, text, id, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDelete(id)} className="close">
        <FaTimes color="purple" size="20px" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
