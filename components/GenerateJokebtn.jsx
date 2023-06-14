import { useState } from "react";

export default function GenerateJokebtn() {
  const [faveJokes, setFaveJokes] = useState([]);
  const [likedJokes, setLikedJokes] = useState([]);
  const [dislikedJokes, setDislikedJokes] = useState([]);
  const [id, setId] = useState("");
  const [showFaves, setShowFaves] = useState(false);
  const [showLiked, setShowLiked] = useState(false);
  const [showDisliked, setShowDisliked] = useState(false);

  const handleClick = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setId(data.id));
  };

  const handleFaveJokeClick = () => {
    setFaveJokes([...faveJokes, id]);
  };

  const handleLikedJokeClick = () => {
    setLikedJokes([...likedJokes, id]);
  };

  const handleDislikedJokeClick = () => {
    setDislikedJokes([...dislikedJokes, id]);
  };

  const toggleFavesList = () => {
    setShowFaves(!showFaves);
  };

  const toggleLikedList = () => {
    setShowLiked(!showLiked);
  };

  const toggleDislikedList = () => {
    setShowDisliked(!showDisliked);
  };

  return (
    <>
      <div className="space-x-2 mb-4">
        <button
          className="mt-10 mb-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={handleClick}
        >
          Generate Joke
        </button>
        <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={handleFaveJokeClick}
        >
          Save Joke
        </button>
        <button
          className=" mt-10 mb-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={handleLikedJokeClick}
        >
          Like Joke
        </button>
        <button
          className="mt-10 mb-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={handleDislikedJokeClick}
        >
          Dislike Joke
        </button>
        <button
          className="mt-10 mb-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={toggleFavesList}
        >
          {showFaves ? "Hide Favorites" : "View Favorites"}
        </button>
        <button
          className="mt-10 mb-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={toggleLikedList}
        >
          {showLiked ? "Hide Liked Jokes" : "View Liked Jokes"}
        </button>
        <button
          className="mt-10 mb-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={toggleDislikedList}
        >
          {showDisliked ? "Hide Disliked Jokes" : "View Disliked Jokes"}
        </button>
      </div>
      <div className="flex justify-between">
        {showFaves && (
          <div className="w-1/3">
            <h3 className="text-xl font-bold mb-2">Saved Jokes:</h3>
            <ul className="list-disc pl-6">
              {faveJokes.map((jokeId) => (
                <li key={jokeId}>{jokeId}</li>
              ))}
            </ul>
          </div>
        )}
        {showLiked && (
          <div className="w-1/3">
            <h3 className="text-xl font-bold mb-2">Liked Jokes:</h3>
            <ul className="list-disc pl-6">
              {likedJokes.map((jokeId) => (
                <li key={jokeId}>{jokeId}</li>
              ))}
            </ul>
          </div>
        )}
        {showDisliked && (
          <div className="w-1/3">
            <h3 className="text-xl font-bold mb-2">Disliked Jokes:</h3>
            <ul className="list-disc pl-6">
              {dislikedJokes.map((jokeId) => (
                <li key={jokeId}>{jokeId}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-12">
          <img
            className="mt-5 mx-auto"
            src={`https://icanhazdadjoke.com/j/${id}.png`}
            alt="Joke Image"
          />
        </div>
      </div>
    </>
  );
}
