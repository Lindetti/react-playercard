import React, { useState } from 'react'
import "./style.css";

const Cards = ({title, image, hover, backImage, team, position, info}) => {

    const [toggle, setToggle] = useState(false)

    const [changeCard, setChangeCard] = useState(false)

    return (
        <div className={changeCard ? 'rotate-card card' : 'card'}> 
        {!changeCard ? (
          <div className="front">
     
            <img
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
              className={toggle ? 'opacity' : null}
              src={!toggle ? image : hover}
              alt="frontImage"
            />
            <h2>{title}</h2>
            <p>{position}</p>
            <button className="button" onClick={() => setChangeCard(true)}> Vänd kort</button>
          </div>
        ) : (
          <div className='back'>
              <img className="backImage" 
              src={backImage}
              alt="backgroundImage"
              />

              <div className="back-content">
              <h3>{team}</h3>
              <p>{info}</p>
             <button className="buttonBack" onClick={() => setChangeCard(false)}>Vänd tillbaka</button>
              </div>
             </div>
        )}
        </div>
  );
}

export default Cards;