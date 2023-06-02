import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateBestScore = () => {
    if (count > bestScore) {
      setBestScore(count);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      updateBestScore();
      return;
    }

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  return (
    <>
      <main className="home-container">
        <div className="home-timer">timer:{timer}</div>
        <div className="home-timer">Best score:{bestScore} </div>
        <div className="home-count">{count}</div>
        <button
          onClick={() => {
            setTimer(10);
            setCount(0);
          }}
          disabled={timer !== 0}
          className="home-btn-start btn"
        >
          start
        </button>
        <button
          onClick={() => setCount(count + 1)}
          disabled={timer === 0}
          className="home-btn-click btn"
        >
          click me
        </button>
        <button
          onClick={() => {
            setCount(0);
            setTimer(0);
          }}
          className="home-btn-reset btn"
        >
          reset
        </button>
      </main>
    </>
  );
}

export default App;
