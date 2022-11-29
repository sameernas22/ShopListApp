import NewShop from './components/inputshop';
import {ShopList} from './components/shoplist';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Shop-List-App using "REDUX"</h1>
      <header className="App-header">
        <NewShop/>
        
      </header>
      <ShopList/>
    </div>
  );
}

export default App;
