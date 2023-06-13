"use client";

import { useState } from "react";


export default function GenerateJokebtn() {

  const faveJokes = []

  const [id, setId] = useState("");

  const handleClick = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setId(data.id);
      });
  };

  const handleFaveJokeClick = () => {
    
  }

  return (
    <>
    <div></div>
      <div className="block items-start justify-between">
        <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleClick}
        >
          Generate Joke
        </button>
        <div className="mt-12 ">
          <img
            className="mt-5 mx-auto"
            src={`https://icanhazdadjoke.com/j/${id}.png`}
          />
        </div>
      </div>
    </>
  );
}
