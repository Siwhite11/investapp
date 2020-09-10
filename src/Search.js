import React, { useState } from "react";
import axios from "axios";
import { IEXCloudClient } from "node-iex-cloud";
import fetch from "node-fetch";

export default function (response) {
  let [message, setMessage] = useState(null);
  let [symbol, setSymbol] = useState(null);

  const iex = new IEXCloudClient(fetch, {
    sandbox: true,
    publishable: "pk_21b4ffeccc6e3cnc1df07467a47231c6",
    version: "stable",
  });

  function displaySymbol(event) {
    setSymbol(event.target.value);
  }

  function showInput() {
    setMessage(
      <ul>
        <li>Name: {iex.companyName}</li>
        <li>Day: {}</li>
        <li>High Source: {}</li>
        <li>Open: {iex.open} </li>
        <li>Close: {} </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/book/2?token=pk_f4fdcc0bcbab48c8af840ac95f2beedd&period=annual`;
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
          onChange={displaySymbol}
        />
        <input className="search" type="submit" value="Search" />
      </form>
      <h5>{message}</h5>
    </div>
  );
}
