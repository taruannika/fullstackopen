import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const giveReviews = (type) => {
    console.log(type);
    setReviews({ ...reviews, [type]: reviews[type] + 1 });
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={() => giveReviews("good")}>Good</Button>
      <Button onClick={() => giveReviews("neutral")}>Neutral</Button>
      <Button onClick={() => giveReviews("bad")}>Bad</Button>

      <h2>Statistics</h2>
      <Statistics reviews={reviews} />
    </div>
  );
};

export default App;
