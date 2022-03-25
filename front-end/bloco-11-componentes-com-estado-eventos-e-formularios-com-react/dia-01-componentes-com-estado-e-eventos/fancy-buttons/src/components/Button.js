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
    this.setState((prevState, _props) => ({ clicks: prevState.clicks + 1 }));
  }
  
  paintBackground() {
    this.setState((prevState, _props) => {
      prevState.backgroundColor = prevState.clicks % 2 === 0 ? 'green' : 'white';
    })
  }
  
  handleClick = () => {
    this.countClicks();
    this.paintBackground();
    this.setState((prevState, _props) => {
      console.log(prevState.backgroundColor);
    })
  }

  render() {
    const backgroundColor = this.state.backgroundColor;
    return (<button onClick={this.handleClick} style={{ backgroundColor }}>Clique aqui</button>)
  }
}