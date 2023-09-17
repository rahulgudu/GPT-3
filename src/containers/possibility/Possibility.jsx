import React from 'react'
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4> 
        <h1 className='gradient__text'>
          The Possiblities are beyond your imagination
        </h1>
        <p>Yet bed any for travelling assistance djcbdjchdvcdsb dbc d hchdv bdbdwfc gdvcdfd djhcvdjk bxsv c dgc</p>
        <h4>Request early access to get Started</h4>
      </div>
    </div>
  );
}

export default Possibility
