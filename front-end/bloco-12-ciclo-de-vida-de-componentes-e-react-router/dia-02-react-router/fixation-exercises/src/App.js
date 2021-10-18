import logo from './logo.svg';
import './App.css';

const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
  );
}

export default App;
