import { useState } from "react";
import Card from "../shared/card";
import Button from "../shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [isdisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
      <form>
        <h2>How woyd you rate your service with us?</h2>
        {/* rating select component */}
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
