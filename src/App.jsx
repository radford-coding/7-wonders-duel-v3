import { useEffect, useState } from "react";
import * as data from "./data";
import './App.css';

const App = () => {

  const [playerCards, setPlayerCards] = useState([]);
  const [aiCards, setAiCards] = useState([]);
  const [boardCards, setBoardCards] = useState([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  useEffect(() => {
    setBoardCards(data.cardsAge1);
  }, []);

  const handleClick = (card) => {
    if (isPlayerTurn) {
      setPlayerCards([...playerCards, card]);
      setIsPlayerTurn(!isPlayerTurn);
    } else {
      setAiCards([...aiCards, card]);
      setIsPlayerTurn(!isPlayerTurn);
    };
    setBoardCards(boardCards.filter(c => c !== card));
  };

  // useEffect(() => {
  //   boardCards.forEach(card => {
  //     console.log(Object.keys(card.costs).map(key => `${key}: ${card.costs[key]}`));
  //   });
  // }, [boardCards]);

  const calculate = (cardArray) => {
    // let productionObj = {};
    for (let card of cardArray) {
      for (let benefit in card.produces) {
        console.log(benefit, card.produces[benefit]);
      };
    };
    // return productionObj;
  };

  useEffect(() => {
    calculate(boardCards);
  }, [boardCards]);



  return (
    <>
      <h1>7 Wonders Duel</h1>
      <div className="container">
        <div>
          <h2>board cards:</h2>
          <ul>
            {boardCards.map((card, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: data.cardColors[card.type]
                }}
                onClick={() => handleClick(card)}
              >
                {card.title}
                <br />
                {JSON.stringify(card.costs)}
                <br />
                {/* {Object.keys(card.costs).forEach(key => `${card.costs[key]}`)} */}
                {/* {Object.keys(card.cost) ? Object.keys(card.costs) : ''} */}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>player cards:</h2>
          <div>
            <p>

            </p>
          </div>
          <ul>
            {playerCards.map((card, index) => (
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
        </div>
        <div>
          <h2>AI cards:</h2>
          <ul>
            {aiCards.map((card, index) => (
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
        </div>
      </div>

    </>
  );
};

export default App;