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

export default function App() {
  const {token, setToken} = useToken();
  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <NavigationBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="cat/:id" element={<CatDetails />} />
          <Route path="add" element={<CatAdder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}