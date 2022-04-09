import useToken from "./hook/useToken";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AnimalAdder from "./component/AnimalAdder";
import AnimalDetails from "./component/AnimalDetails";
import MainScreen from "./component/MainScreen";
import Login from "./component/Login"
import NavigationBar from "./component/NavigationBar";
import Registration from "./component/Registration";
import styles from "./App.css"
import AnimalCardHolder from "./component/AnimalCardsHolder";
import AnimalSold from "./component/AnimalSold";
import ErrorSoldAnimal from "./component/ErrorSoldAnimal"

export default function App() {
  const {token, setToken} = useToken();

  return (
    <div className={styles.container}>
      <NavigationBar token={token}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="animals/:id" element={<AnimalDetails />} />
          <Route path="add" element={<AnimalAdder />} />
          <Route path="register" element={<Registration/>}/>
          <Route path="login" element={<Login setToken={setToken}/>}/>
          <Route path="animals" element={<AnimalCardHolder/>}/>
          <Route path="animals/:id/success" element={<AnimalSold/>}/>
          <Route path="animals/:id/error" element={<ErrorSoldAnimal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}