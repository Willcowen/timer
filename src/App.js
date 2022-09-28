import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-10-04T00:00:00+05:30") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60) / 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return timeLeft;
  };
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  return (
    <div className="App">
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
      <div className="timer">
      <h2>When will we be reunited.... ⌛ </h2>
      <div>
        <h3>{timeLeft.days} Days</h3>
        <h3>{timeLeft.minutes} Minutes</h3>
        <h3>{timeLeft.seconds} Seconds</h3>
      </div>
      </div>
        ) : (
          <p>Time is up 🔥</p>
        )}
    </div>
  );
}

export default App;
