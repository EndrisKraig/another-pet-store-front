import React from "react";
import AnimalSpecials from "./AnimalSpecials";
import styles from "./MainScreen.module.css"

function MainScreen() {
  return (
    <div className={styles.text}>
      Welcome to another pet store!<p/>
      Please click on menu bar above to proceed further...<p/>
      <AnimalSpecials/>
    </div>
  );
}

export default MainScreen;