import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <h1 className="error-message">Opps something went wrong!</h1>
      <br />
      <div>
        Go to home page
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
