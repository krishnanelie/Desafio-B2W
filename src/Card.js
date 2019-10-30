import React from 'react';
import './Card.css';
import card from "./images/card.jpg";
import StateContext from "./context"

function Card() {
  return (
      <StateContext.Consumer>
          {context => (
            <div className={"card " + (context.state.loading ? '' : 'flip')}>
                <div className="card-back card-face">
                    <img src={card} width="100%" height="100%" alt="card"></img>
                </div>

                <div className="card-front card-face" >
                    <label id="planets">{context.state.planet && context.state.planet.name}</label>
                    <p>Population: <label id="population">{context.state.planet && context.state.planet.population}</label></p>
                    <p>Climate: <label id="climate">{context.state.planet && context.state.planet.climate}</label></p>
                    <p>Terrain: <label id="terrain">{context.state.planet && context.state.planet.terrain}</label></p>
                    <p>Films:{
                        context.state.films.map((element, index) => {
                            return (<li key={ index }>{element}</li>)                          
                        })
                    } </p>
                </div>
            </div>
          )}
    </StateContext.Consumer>
  );
}
export default Card;