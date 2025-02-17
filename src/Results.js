import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>
        <div className="Phonetic">{props.results.phonetic}</div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
