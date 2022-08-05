import { useState } from "react";
import Card from "../shared/card";
import Button from "../shared/Button";
import Rating from "../rating/Rating";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [isdisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = (event) => {
    if (text.trim().length <= 9) {
      setIsDisabled(true);
      setMessage("Min 10 chars...");
    } else {
      setIsDisabled(false);
      setMessage(null);
    }
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How woyd you rate your service with us?</h2>
        <Rating
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write the review"
            //setText sets up text to what we write
            //than we pass this back to the value of the input
            //so we can target the value in button onclick event
            value={text}
          />
          <Button type="submit" isDisabled={isdisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
