import React from "react";
import Statics from "./Statics";

const Summary = ({ results }) => {
  //counter
  let keyCounter = 0,
    i = 0;
  return (
    <div className="p-8 flex-1 rounded-r-2xl bg-white drop-shadow-2xl">
      <h1 className="text-xl font-medium mb-10">Summary</h1>
      <div className="px-3">
        {results.map((result) => (
          <Statics result={result} key={keyCounter++} it={i++} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href=""
          className="mx-auto px-24 py-3 bg-slate-900 text-white text-lg font-medium rounded-full hover:bg-slate-800 transition-all">
          continue
        </a>
      </div>
    </div>
  );
};

export default Summary;
