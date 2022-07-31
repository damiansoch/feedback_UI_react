import { useState } from "react";
import FeedbackData from "./data/data";
import FeedbackList from "./components/feedbackList/FeedbackList";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackForm from "./components/feedbackForm/FeedbackForm";

import "./App.css";

import Header from "./components/Header/Header";

function App() {
  //global state
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />

        <FeedbackStats feedback={feedback} />

        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
