import './App.css';
import { foods } from './foods-data.js';
import { albums } from './albums-data.js';
import FoodsList from './FoodsList';
import AlbumList from './AlbumList';
import { sqwads } from './sqwads-data.js';
import SqwadList from './SqwadList';
import { dogs } from './dogs-data.js';
import DogList from './DogList';
// import your arrays here

function App() {
  return (
    <><div className="App">
      <FoodsList foods={foods} />
      <hr />
      <AlbumList albums={albums} />
      <hr />
      <SqwadList sqwads={sqwads} />
      <hr />
      <DogList dogs={dogs} />
    </div>
    </>
  );
}

export default App;
