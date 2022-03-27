import React from "react";
import CatTable from './CatTable';

function MainScreen() {
  return (
    <div className="App">
      <CatTable onClick={(element => this.addElement(element))} />
    </div>
  );
}
export default MainScreen;