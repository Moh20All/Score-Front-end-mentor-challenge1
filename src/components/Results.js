import React, { useEffect, useState } from "react";
import Grade from "./Grade";
import Summary from "./Summary";

const Results = () => {
  const [result, setResult] = useState([]);
  const FetchResult = async () => {
    const res = await fetch("http://localhost:5000/results");
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const GetResults = async () => {
      const Data = await FetchResult();
      setResult(Data);
    };
    GetResults();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl flex items-stretch rounded-2xl flex-wrap">
        <Grade />
        <Summary results={result} />
      </div>
    </div>
  );
};

export default Results;
