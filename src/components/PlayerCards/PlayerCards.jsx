import * as data from "../../data";

const PlayerCards = (props) => {
    return (
        <div>
            <h2>{props.playerName} coins: {props.coins}</h2>
            <h2>{props.playerName} cards:</h2>
            <ul>
                {props.cards.map((card, index) => (
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
    );
};

export default PlayerCards