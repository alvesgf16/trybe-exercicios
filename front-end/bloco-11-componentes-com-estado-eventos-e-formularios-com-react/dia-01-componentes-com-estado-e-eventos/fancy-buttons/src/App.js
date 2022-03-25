import React from 'react';
import './App.css';
import Button from './components/Button';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}
