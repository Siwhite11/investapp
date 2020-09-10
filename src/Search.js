import React, { useState } from "react";
import axios from "axios";

export default function (response) {
  let [message, setMessage] = useState(null);

  function showInput() {
    setMessage(
      <ul>
        <li>Symbol:{quote.symbol} </li>
        <li>Name: {}</li>
        <li>Day: {}</li>
        <li>Open: {Math.round()} </li>
        <li>Close: {Math.round()} </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "pk_f4fdcc0bcbab48c8af840ac95f2beedd";
    let textInput = event.target.value;
    let apiUrl = `https://cloud.iexapis.com/stable/stock/${textInput}/book/2?${apiKey}&period=annual`;
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
