import { useEffect, useState, useReducer } from "react";
import * as data from "./data";
import './App.css';
import Conflict from "./components/Conflict/Conflict";
import { cardReducer, initialState } from "./services/reducerHooks";

const App = () => {

  const [state, dispatch] = useReducer(cardReducer, {...initialState, boardCards: data.cardsAge1});

  // const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  // const [playerCards, setPlayerCards] = useState([]);
  // const [aiCards, setAiCards] = useState([]);
  // const [boardCards, setBoardCards] = useState([]);



  // const [discards, setDiscards] = useState([]);
  // const [coins, setCoins] = useState({
  //   player: 7,
  //   ai: 7,
  // });
  // start at index 9 (space #10 of 19)
  // const [military, setMilitary] = useState(9);

  // start with age 1 cards
  // useEffect(() => {
  //   setBoardCards(data.cardsAge1);
  // }, []);

  // const handleBuy = (card) => {
  //   dispatch({ type: 'buyCard', card: card });
  //   if (isPlayerTurn) {
  //     setPlayerCards([...state.playerCards, card]);
  //     if (card.costs.gold) setCoins({ ...coins, player: coins.player - card.costs.gold });
  //     if (card.produces.shields) setMilitary(military + card.produces.shields);
  //     setIsPlayerTurn(!isPlayerTurn);

  //   } else {
  //     setAiCards([...aiCards, card]);
  //     if (card.costs.gold) setCoins({ ...coins, ai: coins.ai - card.costs.gold });
  //     if (card.produces.shields) setMilitary(military - card.produces.shields);
  //     setIsPlayerTurn(!isPlayerTurn);
  //   };
  //   setBoardCards(boardCards.filter(c => c !== card));
  // };

  const handleBuy = (card) => {
    dispatch({ type: 'buyCard', card });
  };

  // const handleSpend = (card, who) => {

  // };

  // const handleSell = (card) => {
  //   if (isPlayerTurn) {
  //     const numOfYellows = playerCards.filter(card => card.type === 'commerce').length;
  //     setDiscards([...discards, card]);
  //     setCoins({ ...coins, player: coins.player + 2 + numOfYellows });
  //     setIsPlayerTurn(!isPlayerTurn);
  //   } else {
  //     const numOfYellows = aiCards.filter(card => card.type === 'commerce').length;
  //     setDiscards([...discards, card]);
  //     setCoins({ ...coins, ai: coins.ai + 2 + numOfYellows });
  //     setIsPlayerTurn(!isPlayerTurn);
  //   };
  //   setBoardCards(boardCards.filter(c => c !== card));
  // };

  // const calculate = (cardArray) => {
  //   let productionObj = {};
  //   for (let card of cardArray) {
  //     for (let benefit in card.produces) {
  //       // console.log(benefit, card.produces[benefit]);
  //       if (productionObj[benefit]) {
  //         productionObj[benefit] += card.produces[benefit];
  //       } else {
  //         productionObj[benefit] = card.produces[benefit];
  //       };
  //     };
  //   };
  //   return productionObj;
  // };

  // useEffect(() => {
  //   console.log(calculate(boardCards));
  // }, [boardCards]);

  return (
    <>
      <h1>7 Wonders Duel</h1>
      {/* <Conflict military={military}></Conflict> */}
      <p>turn: {state.isPlayerTurn ? 'player' : 'AI'}</p>
      <div className="container">
        <div>
          <h2>age 1</h2>
          <h2>board cards:</h2>
          <div>
            {/* {Object.keys(calculate(boardCards)).map((k, i) => <p key={i}>{k}: {calculate(boardCards)[k]}</p>)} */}
          </div>
          <ul>
            {state.boardCards.map((card, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: data.cardColors[card.type]
                }}
              >
                {card.title}
                <br />
                {JSON.stringify(card.costs)}
                <br />
                <button onClick={() => handleBuy(card)}>buy</button>
                {/* <button onClick={() => handleSell(card)}>sell</button> */}
                <button>sell</button>
                <button>wonder</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* <h2>player coins: {coins.player}</h2> */}
          <h2>player cards:</h2>
          <div>
            {/* {Object.keys(calculate(playerCards)).map((k, i) => <p key={i}>{k}: {calculate(playerCards)[k]}</p>)} */}
          </div>
          <ul>
            {state.playerCards.map((card, index) => (
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
          {/* <h2>AI coins: {coins.ai}</h2> */}
          <h2>AI cards:</h2>
          <div>
            {/* {Object.keys(calculate(aiCards)).map((k, i) => <p key={i}>{k}: {calculate(aiCards)[k]}</p>)} */}
          </div>
          <ul>
            {state.aiCards.map((card, index) => (
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