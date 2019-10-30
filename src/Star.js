import React from 'react';
import './Star.css';
import star from "./images/estrela.png";
import axios from "axios";
import StateContext from "./context";

class Star extends React.Component {    
    generateRandom(number) {
        return Math.floor(Math.random() * number) + 1;
    }
    get = (state) => {
        state.setLoading(true)
        var random = this.generateRandom(60);
        axios.get(`https://swapi.co/api/planets/${random}/`)
            .then(function (response) {
                state.setPlanet(response.data);
                var films = response.data.films;
                var filmTitles = [];
                var promises = [];
                films.forEach(element => {
                    const promise = axios.get(element);
                    promises.push(promise);
                    promise.then(responsefilm => {
                        filmTitles.push(responsefilm.data.title);
                    });
                });
                Promise.all(promises).then(() => {
                    state.setLoading(false);
                    state.setFilms(filmTitles);
                });
            });
    }
    render (){
        return (
            <StateContext.Consumer>
                {state => (
                    <div className="container">
                        <img id="next" src={star} alt="next"></img>
                        <button onClick={() => this.get(state)} className="btn">NEXT</button>
                    </div>
                )}
            </StateContext.Consumer>
        )
    }
}
export default Star;