import React from "react";

const Grade = () => {
  return (
    <div className="p-8 flex-1 text-center bg-gradient-to-b from-move1 to-move2 rounded-2xl drop-shadow-lg">
      <h1 className="text-xl font-semibold text-gray-300 ">Your Results</h1>
      <div className="w-40 h-40 bg-gradient-to-b from-indigo-700 to-indigo-600 my-5 rounded-full mx-auto flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold text-white place-content-center">
          76
        </h1>
        <p className="text-md font-medium text-gray-400">of 100</p>
      </div>
      <h1 className="text-white text-3xl font-semibold my-5">Great</h1>
      <p className="text-lg font-medium text-gray-300 px-2">
        You scored higher than 65% of the people who have taken these tests
      </p>
    </div>
  );
};

export default Grade;
