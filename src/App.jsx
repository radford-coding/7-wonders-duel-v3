import { useReducer } from "react";
import * as data from "./data";
import './App.css';
import Conflict from "./components/Conflict/Conflict";
import { cardReducer, initialState } from "./services/reducerHooks";

const App = () => {

  // start with age 1 cards
  const [state, dispatch] = useReducer(cardReducer, { ...initialState, boardCards: data.cardsAge1 });

  const handleBuy = (card) => {
    dispatch({ type: 'buyCard', card });
  };

  const handleSell = (card) => {
    console.log(+state.isPlayerTurn * 2 - 1);
    dispatch({ type: 'sellCard', card });
  };


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
      <Conflict military={state.militaryConflict}></Conflict>
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
                <button onClick={() => handleSell(card)}>sell</button>
                <button>wonder</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>player coins: {state.coins.player}</h2>
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
          <h2>AI coins: {state.coins.ai}</h2>
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