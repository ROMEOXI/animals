import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)];
  
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />
  });

  // const count=0;
  // console.log({count}); count++;

  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
  
}

export default App;
