import { useState } from "react";

// Funktion för en dislike knapp

const Dislikes = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>
        <button
          className="likedislike-button"
          onClick={() => setCounter(counter + 1)}
        >
          Dislike
        </button>
        Dislikes: {counter}
      </div>
    </div>
  );
};

export default Dislikes;
