import { useReducer } from "react";
import * as data from "./data";
import './App.css';
import Conflict from "./components/Conflict/Conflict";
import BoardCards from "./components/BoardCards/BoardCards";
import PlayerCards from "./components/PlayerCards/PlayerCards";
import { cardReducer, initialState } from "./services/reducerHooks";

const App = () => {

  // start with age 1 cards
  const [state, dispatch] = useReducer(cardReducer, { ...initialState, boardCards: data.cardsAge1 });

  const handleBuy = (card) => {
    // if (card.isBuyableByPlayer) {
      dispatch({ type: 'buyCard', card });
    // };
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

  const isBuyable = (card) => {
    const boughtCards = state.isPlayerTurn ? state.playerCards : state.aiCards;
  };

  // useEffect(() => {
  //   console.log(calculate(boardCards));
  // }, [boardCards]);

  return (
    <>
      <h1>7 Wonders Duel</h1>
      <Conflict military={state.militaryConflict}></Conflict>
      <p>turn: {state.isPlayerTurn ? 'player' : 'AI'}</p>
      <div className="container">
        <BoardCards
          boardCards={state.boardCards}
          handleBuy={handleBuy}
          handleSell={handleSell}
        ></BoardCards>
        <PlayerCards
          playerName={'player'}
          coins={state.coins.player}
          cards={state.playerCards}
        ></PlayerCards>
        <PlayerCards
          playerName={'AI'}
          coins={state.coins.ai}
          cards={state.aiCards}
        ></PlayerCards>
      </div>
    </>
  );
};

export default App;