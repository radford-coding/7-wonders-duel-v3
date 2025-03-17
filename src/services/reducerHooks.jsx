const initialState = {
    boardCards: [],
    discards: [],
    playerCards: [],
    aiCards: [],
    isPlayerTurn: true,
    coins: {
        player: 7,
        ai: 7,
    },
    militaryConflict: 9,
};

const cardReducer = (state, action) => {
    if (action.type === 'buyCard') {
        const updatedState = {
            ...state,
            playerCards: state.isPlayerTurn ? [...state.playerCards, action.card] : state.playerCards,
            aiCards: !state.isPlayerTurn ? [...state.aiCards, action.card] : state.aiCards,
            boardCards: state.boardCards.filter(c => c !== action.card),
            coins: {
                ...state.coins,
                player: (action.card.costs.gold && state.isPlayerTurn) ? state.coins.player - action.card.costs.gold : state.coins.player,
                ai: (action.card.costs.gold && !state.isPlayerTurn) ? state.coins.ai - action.card.costs.gold : state.coins.ai,
            },
            militaryConflict: action.card.produces.shields ? state.militaryConflict + (+state.isPlayerTurn * 2 - 1) * action.card.produces.shields : state.militaryConflict,
            isPlayerTurn: !state.isPlayerTurn,
        };
        return updatedState;
    } else if (action.type === 'sellCard') {
        const updatedState = {
            ...state,
            boardCards: state.boardCards.filter(c => c !== action.card),
            discards: [...state.discards, action.card],
            coins: {
                ...state.coins,
                player: state.isPlayerTurn ? state.coins.player + 2 + state.playerCards.filter(c => c.type === 'commerce').length : state.coins.player,
                ai: !state.isPlayerTurn ? state.coins.ai + 2 + state.aiCards.filter(c => c.type === 'commerce').length : state.coins.ai,
            },
            isPlayerTurn: !state.isPlayerTurn,
        };
        return updatedState;
    };
    // catchall if we messed up
    return state
};

export { cardReducer, initialState };