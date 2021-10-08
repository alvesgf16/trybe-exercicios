import React from "react";

export default class Button extends React.Component {
  constructor() {
    super();

    this.state = {
      clicks: 0,
      backgroundColor: 'white',
    };

    this.countClicks = this.countClicks.bind(this);
    this.paintBackground = this.paintBackground.bind(this);
  }
  
  countClicks() {
    this.setState((previousState, _props) => {
      const counter = { clicks: previousState.clicks + 1 };
      return counter;
    });
  }
  
  paintBackground() {
    this.setState((previousState, _props) => {
      previousState.backgroundColor = previousState.clicks % 2 === 0 ? 'green' : 'white';
    })
  }
  
  handleClick = () => {
    this.countClicks();
    this.paintBackground();
    this.setState((previousState, _props) => {
      console.log(previousState.backgroundColor);
    })
  }

  render() {
    const backgroundColor = this.state.backgroundColor;
    return (<button onClick={this.handleClick} style={{ backgroundColor }}>Clique aqui</button>)
  }
}