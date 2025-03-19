import React, { Component } from "react";
import "./FruitCounter.css";

class FruitCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  };

  onIncreaseMangoesCounter = () => {
    this.setState((prevState) => ({ mangoes: prevState.mangoes + 1 }));
  };

  onIncreaseBananasCounter = () => {
    this.setState((prevState) => ({ bananas: prevState.bananas + 1 }));
  };

  render() {
    const { mangoes, bananas } = this.state;
    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="fruit-count">{mangoes}</span> mangoes
          <span className="fruit-count"> {bananas}</span> bananas
        </h1>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            className="image1"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            className="image2"
          />
        </div>
        <div className="button-container">
          <button className="btn1" onClick={this.onIncreaseMangoesCounter}>
            Eat Mango
          </button>
          <button className="btn2" onClick={this.onIncreaseBananasCounter}>
            Eat Banana
          </button>
        </div>
      </div>
    );
  }
}

export default FruitCounter;
