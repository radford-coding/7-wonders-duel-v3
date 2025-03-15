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
    let productionObj = {};
    for (let card of cardArray) {
      for (let benefit in card.produces) {
        // console.log(benefit, card.produces[benefit]);
        if (productionObj[benefit]) {
          productionObj[benefit] += card.produces[benefit];
        } else {
          productionObj[benefit] = card.produces[benefit];
        };
      };
    };
    return productionObj;
  };

  useEffect(() => {
    console.log(calculate(boardCards));
  }, [boardCards]);



  return (
    <>
      <h1>7 Wonders Duel</h1>
      <div className="container">
        <div>
          <h2>board cards:</h2>
          <div>
            {/* {Object.keys(calculate(boardCards)).map((k, i) => <p key={i}>{k}: {calculate(boardCards)[k]}</p>)} */}
          </div>
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
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>player cards:</h2>
          <div>
            {Object.keys(calculate(playerCards)).map((k, i) => <p key={i}>{k}: {calculate(playerCards)[k]}</p>)}
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
          <div>
            {Object.keys(calculate(aiCards)).map((k, i) => <p key={i}>{k}: {calculate(aiCards)[k]}</p>)}
          </div>
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