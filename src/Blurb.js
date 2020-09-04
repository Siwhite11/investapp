import React from "react";
import "./Blurb.css";

export default function () {
  return (
    <div className="info">
      <h3>Investing 101</h3>
      <p>
        What is Investing? Investing involves committing money in order to earn
        a financial return. This essentially means that you invest money to make
        money and achieve your financial goals. by {""}
        <a
          href="https://www.wealthsimple.com/en-us/learn/investing-basics"
          target="_blank"
          rel="noopener noreferrer"
        >
          Weathsimple
        </a>
      </p>
      <br />
      <h5>Types of Investments</h5>
      <ul>
        <li>
          <span>Stocks</span>
        </li>
        <li>
          <span>Bonds</span>
        </li>
        <li>
          <span>Mutual funds</span>
        </li>
        <li>
          <span>Exchange-traded funds (ETF)</span>
        </li>
        <li>
          <span>Certificates of Deposit</span>
        </li>
        <li>
          <span>Retirement Plans</span>
        </li>
        <li>
          <span>Options</span>
        </li>
        <li>
          <span>Cryptocurrencies</span>
        </li>
        <li>
          <span>Real estate</span>
        </li>
      </ul>
      by{" "}
      <a
        href="https://smartasset.com/investing/types-of-investment"
        target="_blank"
        rel="noopener noreferrer"
      >
        smartasset
      </a>
    </div>
  );
}
