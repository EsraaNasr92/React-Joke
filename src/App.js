import { useState } from 'react';
import axios from "axios";
import './App.css';

function App() {

  const [joke, setJoke] = useState('');

  /* Simple function 
  function handleJoke() {
    axios.get("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((res) =>{
      setJoke(res.data.joke);
    })
  }*/

  // Get API and handle errors
  function handleJoke() {
    axios.get("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => {
        if (res.data.error) {
          console.error("Error fetching joke:", res.data.error);
          setJoke("Failed to fetch joke. Please try again later.");
        } else {
          setJoke(res.data.joke);
        }
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setJoke("Failed to fetch joke. Please try again later.");
      });
  }

  
  return (
    <div className="App min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Joke Generator Using React and Joke API</h1>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleJoke}
      >
        Generate a new joke
      </button>
      <p className="text-lg mt-4">{joke}</p>
    </div>
  );
}

export default App;
