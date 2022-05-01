import useToken from "./hook/useToken";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AnimalAdder from "./component/animal/AnimalAdder";
import AnimalDetails from "./component/animal/AnimalDetails";
import MainScreen from "./component/MainScreen";
import Login from "./component/auth/Login"
import NavigationBar from "./component/navigation/NavigationBar";
import Registration from "./component/auth/Registration";
import styles from "./App.module.css"
import AnimalCardHolder from "./component/animal/AnimalCardsHolder";
import AnimalSold from "./component/animal/AnimalSold";
import ErrorSoldAnimal from "./component/animal/ErrorSoldAnimal"

export default function App() {
  const { token, setToken } = useToken();

  return (
    <div className={styles.container}>
      <NavigationBar token={token} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="animals/:id" element={<AnimalDetails />} />
          <Route path="add" element={<AnimalAdder />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login setToken={setToken} />} />
          <Route path="animals" element={<AnimalCardHolder />} />
          <Route path="animals/:id/success" element={<AnimalSold />} />
          <Route path="animals/:id/error" element={<ErrorSoldAnimal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}