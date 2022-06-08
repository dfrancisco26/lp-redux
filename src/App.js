import logo from './logo.svg';
import './App.css';
import { foods } from './foods-data.js';
import { albums } from './albums-data.js';
import FoodsList from './FoodsList';
import AlbumList from './AlbumList';
// import your arrays here

function App() {
  return (
    <><div className="App">
      <FoodsList foods={foods} />
      <hr />
      <AlbumList albums={albums} />
    </div></>
  );
}

export default App;
