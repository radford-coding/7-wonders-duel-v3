const initialState = {
    boardCards: [],
    playerCards: [],
    aiCards: [],
    isPlayerTurn: true,
};

const cardReducer = (state, action) => {

    if (action.type === 'buyCard') {
        const updatedState = {
            ...state,
            playerCards: state.isPlayerTurn ? [...state.playerCards, action.card] : state.playerCards,
            aiCards: !state.isPlayerTurn ? [...state.aiCards, action.card] : state.aiCards,
            boardCards: state.boardCards.filter(c => c !== action.card),
            isPlayerTurn: !state.isPlayerTurn,
        };
        return updatedState;
        // setPlayerCards([...state.playerCards, card]);
        // if (card.costs.gold) setCoins({ ...coins, player: coins.player - card.costs.gold });
        // if (card.produces.shields) setMilitary(military + card.produces.shields);
        // setIsPlayerTurn(!isPlayerTurn);
    };
    // catchall if we messed up
    return state



};

export { cardReducer, initialState };