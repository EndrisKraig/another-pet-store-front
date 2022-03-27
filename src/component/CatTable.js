import React, { useState, useEffect } from 'react';
import GetRequest from '../service/FetchService';
import styles from './CatTable.module.css'

const header = (
  <tr>
    <th>Id</th>
    <th>Nickname</th>
    <th>Breed</th>
    <th>Price</th>
  </tr>)

function CatTable() {
  const [catsData, setCatsData] = useState(
    {
      error: null,
      isLoaded: false,
      cats: [],
    }
  );

  useEffect(() => {
    if (!catsData.isLoaded) {
      GetRequest("/cats",
        (result) => {
          setCatsData({
            isLoaded: true,
            cats: result
          });
        },
        (error) => {
          setCatsData({
            isLoaded: true,
            error
          });
        })
    }
  });
  const { error, isLoaded, cats } = catsData;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const catList = cats.map((cat) =>
      <tr key={cat.id}>
        <th onClick={() => this.props.onClick(cat.nickname)}>{cat.id}</th>
        <th>{cat.nickname}</th>
        <th>{cat.breed}</th>
        <th>{cat.price}</th>
      </tr>
    )
    return (
      <table className={styles.center}>
        <tbody>
          {header}
          {catList}
        </tbody>
      </table>);
  }
}

export default CatTable