import { useState } from "react";
import * as data from "./data";



const App = () => {

  const [playerCards, setPlayerCards] = useState([]);
  const [aiCards, setAiCards] = useState([]);
  const [boardCards, setBoardCards] = useState([]);

  return (
    <>
      <h1>7 Wonders Duel</h1>
      <ul>
        {data.cardsAge1.map((card, index) => (
          <li
            key={index}
            style={{
              backgroundColor: data.cardColors[card.type]
            }}
          >
            {card.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;