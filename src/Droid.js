import React from 'react';
import './Droid.css';
import droid from "./images/bb-8-final.png";

function Droid() {
  return (
    <img id="img" src={droid} width="700px" height="1000px" alt="bb-8"></img>
  );
}
export default Droid;  