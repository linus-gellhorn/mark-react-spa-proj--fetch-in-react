import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();

  const handleGetDog = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const jsonBody: Dog = await response.json();
    setDog(jsonBody);
    console.log(jsonBody) 
  }

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <img alt={"a random dog"} src={dog.message}/>
        <hr />
        <button onClick={handleGetDog}>Get another doggo</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
        Click the button to trigger a <code>fetch</code> that gets a random
        dog pic from an API!
        </p>
        <button onClick={handleGetDog}>Get doggo</button>
      </div>
    );
  }

}

// interface Joke {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }

// function App() {
//   const [joke, setJoke] = useState<Joke>();

//   // const handleGetJoke = async () => {
//   //   const response = await fetch(
//   //     "https://jokestemp.neillbogie.repl.co/jokes/general/random"
//   //   );
//   //   const jsonBody: Joke[] = await response.json();
//   //   setJoke(jsonBody[0]);
//   // };

//   const handleGetJoke = () => {
//     fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
//       .then((response) => response.json())
//       .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
//   };

//   if (joke) {
//     return (
//       <div>
//         <h1>Joke app</h1>
//         <details>
//           <summary>{joke.setup}</summary>
//           <p>{joke.punchline}</p>
//         </details>
//         <hr />
//         <button onClick={handleGetJoke}>Get another joke</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Joke app</h1>
//         <p>
//           Click the button to trigger a <code>fetch</code> that gets a random
//           joke from an API!
//         </p>
//         <button onClick={handleGetJoke}>Get joke</button>
//       </div>
//     );
//   }
// }

export default App;
