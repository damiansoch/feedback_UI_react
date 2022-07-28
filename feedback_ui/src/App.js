import { useState } from "react";
import FeedbackData from "./data/data";
import FeedbackList from "./components/feedbackList/FeedbackList";

import "./App.css";

import Header from "./components/Header/Header";

function App() {
  //global state
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />

      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
