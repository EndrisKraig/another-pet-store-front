import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CatAdder from "./component/CatAdder";

import CatDetails from "./component/CatDetails";
import MainScreen from "./component/MainScreen";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="cat/:id" element={<CatDetails />} />
      <Route path="add" element={<CatAdder/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);
