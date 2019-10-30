import React from 'react';
import './Background.css';
import Droid from './Droid';
import Star from './Star';
import Logo from './Logo';
import Card from './Card';
import StateContext from "./context";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: null,
      loading: true,
      films: [],
    };
  }
  render() {
    return (
      <StateContext.Provider value={{
        state: this.state,
        setLoading: (value) => this.setState({ loading: value }),
        setPlanet: (value) => this.setState({ planet: value }),
        setFilms: (value) => this.setState({ films: value })
      }}> 
        <div className="background">
          <Droid></Droid>
          <Star></Star>
          <Logo></Logo>
          <Card></Card>
        </div>
      </StateContext.Provider>
    );
  }
}
export default Background;  