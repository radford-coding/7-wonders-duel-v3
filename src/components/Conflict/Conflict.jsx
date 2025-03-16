const Conflict = (props) => {


    return (
        <div className="conflict">
            {[...Array(19).keys()].map((space, index) => (
                index === props.military ? <div className="conflict-pawn" key={index}></div> : <div className="conflict-space" key={index}></div>
            ))}
            
        </div>
    );
};

export default Conflict