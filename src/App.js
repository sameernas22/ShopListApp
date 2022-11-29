import NewShop from './components/inputshop';
import ShopList from './components/shoplist';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Shop List App</h1>
      <header className="App-header">
        <NewShop/>
        <ShopList/>
      </header>
    </div>
  );
}

export default App;
