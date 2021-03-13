import React from 'react';

const Tile = (props) => {

    if(props.image) {
        return (<section>
            <img src={props.image} alt={props.name}/>
        </section>)
    } else {
        return (
            <section>
                <h2>{props.name}</h2>
                <p>{props.text}</p>
            </section>
        )
    }
};

export default Tile;
