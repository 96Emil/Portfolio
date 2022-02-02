import { useState } from "react";

// Funktion för en like knapp

const Likes = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>
        <button
          className="likedislike-button"
          onClick={() => setCounter(counter + 1)}
        >
          Like
        </button>
        Likes: {counter}
      </div>
    </div>
  );
};

export default Likes;
