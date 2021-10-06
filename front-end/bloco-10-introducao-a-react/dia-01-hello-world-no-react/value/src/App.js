import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['fazer exercícios', 'fechamento', 'jantar', 'tomar café', 'beber água', 'trocar de roupa', 'baba'];

function App() {
  return (
    <ol>{appointments.map((appointment) => Task(appointment))}</ol>
  );
}

export default App;
