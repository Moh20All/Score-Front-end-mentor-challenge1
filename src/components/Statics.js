import React from "react";
import Reaction from "../assets/icon-reaction.svg";
import Memory from "../assets/icon-memory.svg";
import Verbal from "../assets/icon-verbal.svg";
import Visual from "../assets/icon-visual.svg";
const components = [Reaction, Memory, Verbal, Visual];
const Statics = ({ result, key, it }) => {
  // Function to concatenate class names
  function concatenate() {
    const classNames = Array.from(arguments).filter(Boolean);
    return classNames.join(" ");
  }
  let i = 0;
  return (
    <div
      className={concatenate(
        result.background,
        "flex items-center justify-between px-4 py-3 rounded-md my-2"
      )}
      key={result.category}>
      <div className="flex items-center">
        <img src={components[it]} alt="" className="inline mr-2" />
        <span className={concatenate(result.text, "font-medium")}>
          {result.category}
        </span>
      </div>

      <h1 className="font-medium">
        {result.score} <span className="text-gray-600"> / 100</span>
      </h1>
    </div>
  );
};

export default Statics;
