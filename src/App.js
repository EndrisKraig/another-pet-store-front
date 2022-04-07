import useToken from "./hook/useToken";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import CatAdder from "./component/CatAdder";
import CatDetails from "./component/CatDetails";
import MainScreen from "./component/MainScreen";
import Login from "./component/Login"
import NavigationBar from "./component/NavigationBar";
import Registration from "./component/Registration";
import styles from "./App.css"
import CatCardHolder from "./component/CatCardsHolder";

export default function App() {
  const {token, setToken} = useToken();

  return (
    <div className={styles.container}>
      <NavigationBar token={token}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="cat/:id" element={<CatDetails />} />
          <Route path="add" element={<CatAdder />} />
          <Route path="register" element={<Registration/>}/>
          <Route path="login" element={<Login setToken={setToken}/>}/>
          <Route path="cats" element={<CatCardHolder/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}