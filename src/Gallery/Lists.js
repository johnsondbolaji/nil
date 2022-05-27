import React from "react";
import Records from "./records.json";
import "./Lists.css";
import { useState } from "react";
function Lists() {
  const [searchTerm, SetSearchTerm] = useState("");
  return (
    <div className="card">
      <div className="top">
        <h1>Welcome to Johnson Daniel's Portfolio</h1>
        <span>
          <input
            className={"bg-light-green dib br3 pa2 ma2 bw2 shado-5"}
            type="text"
            placeholder="Search Portfolio"
            onChange={event => {
              SetSearchTerm(event.target.value);
            }}
          />
        </span>
      </div>

      {Records.filter(val => {
        if (searchTerm === "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
        return false;
      }).map(val => {
        return (
          <div
            className={"bg-light-green dib br3 pa3 ma2 grow bw2 shado-5 tc"}
            key={val.id}
          >
            <a href={val.url}>
              <img src={val.icon} width={370} height={320} alt="" />
            </a>

            <br />

            <b>{val.title}</b>

            <br />
            {val.description}
          </div>
        );
      })}
    </div>
  );
}

export default Lists;
