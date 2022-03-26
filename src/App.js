import logo from './logo.svg';
import './App.css';
import CatTable from './component/CatTable';

function App() {
  return (
    <div className="App">
      <CatTable cats={[{
        "id": 3,
        "nickname": "Fluffy12",
        "breed": "Persian1",
        "price": 100
    },{
      "id": 2,
      "nickname": "Fluffy12",
      "breed": "Persian1",
      "price": 100
  }]}/>
    </div>
  );
}

export default App;
