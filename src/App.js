import React from "react";
import "./App.css";
import Blurb from "./Blurb";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="Main-App">
      <div class="container">
        <h1>Let's Start Investing!</h1>

        <div class="row">
          <div class="col">
            <Blurb />
          </div>
          <div class="col">
            <Search />
          </div>
        </div>

        <br />
        <div>
          <footer className="me">
            {" "}
            Open Source code by{" "}
            <a
              href="https://github.com/Siwhite11/investapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stephanie White{" "}
            </a>
          </footer>
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
