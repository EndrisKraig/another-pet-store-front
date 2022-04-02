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

export default function App() {
  const {token, setToken} = useToken();
  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <NavigationBar token={token}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="cat/:id" element={<CatDetails />} />
          <Route path="add" element={<CatAdder />} />
          <Route path="register" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}