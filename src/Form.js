import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="Form">
      <input type="text" className="input-city" placeholder="Type a city..." />
      <button type="submit" className="btn btn-warning">
        Search
      </button>
      <button type="click" className="btn btn-light">
        <span role="img" aria-label="pin">
          📍
        </span>
      </button>
    </form>
  );
}
