import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

function CatDetails() {
  const [catData, setCatData] = useState({
    isLoaded: false,
    error: null,
    cat: {}
  });
  let { id } = useParams();

  useEffect(() => {
    if (!catData.isLoaded) {
      fetch("http://localhost:8080/cats/" + id)
        .then(res => res.json())
        .then(
          (result) => {

            setCatData({
              isLoaded: true,
              cat: result
            });
          },
          (error) => {
            setCatData({
              isLoaded: true,
              error
            });
          }
        )
    }
  });

  if (!catData.isLoaded) {
    return (<div>loading...</div>)
  }
  const cat = catData.cat;
  //TODO read about routing a litle more, e.g. what is outlet and do i realy need it?
  return (<div>
    {cat.id + " with nickname " + cat.nickname}
    <Outlet />
  </div>
  )
}

export default CatDetails

