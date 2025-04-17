import * as data from "../../data";

const BoardCards = (props) => {
    return (
        <div>
            <h2>age 1</h2>
            <h2>board cards:</h2>
            <ul>
                {props.boardCards.map((card, index) => (
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
                        <button onClick={() => props.handleBuy(card)}>buy</button>
                        <button onClick={() => props.handleSell(card)}>sell</button>
                        <button>wonder</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardCards