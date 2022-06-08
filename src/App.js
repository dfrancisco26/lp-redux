import logo from './logo.svg';
import './App.css';
import { foods } from './foods-data.js';
import FoodsList from './FoodsList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <FoodsList foods={foods}/>
    </div>
  );
}

export default App;
