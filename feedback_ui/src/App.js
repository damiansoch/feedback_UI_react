import FeedbackList from './components/feedbackList/FeedbackList';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/feedbackForm/FeedbackForm';
import { FeedbackProvider } from './context/feedbackContext';

import './App.css';

import Header from './components/Header/Header';

function App() {
  //global state

  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />

        <FeedbackStats />

        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default App;
