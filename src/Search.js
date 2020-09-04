import React from "react";

export default function () {
  return (
    <form className="search-input">
      <input
        type="text"
        placeholder="Enter symbol"
        autocomplete="off"
        autofocus="on"
      />
      <input className="search" type="submit" value="Search" />
    </form>
  );
}
