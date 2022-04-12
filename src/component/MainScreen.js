import React from "react";
import styles from "./MainScreen.module.css"

function MainScreen() {
  return (
    <div className={styles.text}>
      Welcome to another pet store!<p/>
      Please click on menu bar above to proceed further...<p/>
      Here will be special offers someday...
    </div>
  );
}

export default MainScreen;