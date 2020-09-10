import React, { useState } from "react";
import axios from "axios";

export default function (response) {
  let [message, setMessage] = useState(null);

  function showInput() {
    setMessage(
      <ul>
        <li>Symbol:{} </li>
        <li>Name: {}</li>
        <li>Day: {}</li>
        <li>Open: {Math.round()} </li>
        <li>Close: {Math.round()} </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let textInput = event.target.value;
    let apiKey = "6b3300e0c60884c4b50763fcabdac835";
    let apiUrl = ``;
    axios.get(apiUrl).then(showInput);
  }
  return (
    <div className="search-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter symbol"
          autoComplete="off"
          autoFocus="on"
          onChange="displayText"
        />
        <input className="search" type="submit" value="Search" />
      </form>
      <h5>{message}</h5>
    </div>
  );
}
