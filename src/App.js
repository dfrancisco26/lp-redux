import logo from './logo.svg';
import './App.css';
import { foods } from './foods-data.js';
import { albums } from './albums-data.js';
import FoodsList from './FoodsList';
import AlbumList from './AlbumList';
import { sqwads } from './sqwads-data.js';
import SqwadList from './SqwadList';
// import your arrays here

function App() {
  return (
    <><div className="App">
      <FoodsList foods={foods} />
      <hr />
      <AlbumList albums={albums} />
      <hr />
      <SqwadList sqwads={sqwads} />
    </div>
    </>
  );
}

export default App;
