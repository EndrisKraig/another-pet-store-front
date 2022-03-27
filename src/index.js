import { render } from "react-dom";
import {
  useParams,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import CatDetails from "./component/CatDetails";

import MainScreen from "./component/MainScreen";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="cat" element={<Wrapper />}>
        
      </Route>
      <Route path="cat/:id" element={<Wrapper />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

function Wrapper(){
  let {id} = useParams();
  return (
    <CatDetails id={id}/>
  )
}