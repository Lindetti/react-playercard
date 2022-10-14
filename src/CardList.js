import React from "react";
import Cards from "./Cards";

const CardList = ({players}) => {

return (
    <div className="card-container"> 
        {
            players.map((player, i) => {
                return (
            <Cards 
            key={i} 
            id={player.id} 
            title={player.title}
            desc={player.desc}
            image={player.image}
            hover={player.hoverImage}
            backImage={player.backImage}
            team={player.team}
            position={player.position}
            info={player.info}
            />
                );
            })
        }
    </div>
);
}

export default CardList;