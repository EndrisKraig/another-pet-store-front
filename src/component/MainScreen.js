import React from "react";
import styles from "./MainScreen.module.css"

function MainScreen() {
  //TODO img size
  return (
    <div>
      <div>
        <img src="animal.jpg" alt="Cat" className={styles.img} />
        <div className={styles.text_center}>Find your perfect pet in another pet store!</div>
      </div>
      <div className={styles.container}>
        <img src="delivery.jpg" alt="Delivery" className={styles.img} />
        <div className={styles.text_up_left}>We can deliver your new pet<br/>anywhere and anytime!</div>
      </div>
    </div>

  );
}

export default MainScreen;