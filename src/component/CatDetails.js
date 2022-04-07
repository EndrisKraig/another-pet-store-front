import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetRequest, PostRequestNew } from "../service/FetchService";
import Loader from "./Loader";
import CatCard from "./CatCard";
import useToken from "../hook/useToken";

export default function CatDetails() {
  const [catDetails, setCatDetails] = useState({ isLoaded: false });
  const { id } = useParams();
  const { token, setToken } = useToken();
  console.log(token);
  const act = () => {
    PostRequestNew("/cats/" + id, 
    {},
     (resp) => { window.location.href = "/cats/" + id + "/success" },
    (error) => { window.location.href = "/cats/" + id + "/error" }, token);
  };
  useEffect(() => {
    if (catDetails.isLoaded === false) {
      GetRequest("/cats/" + id,
        (resp) => {
          setCatDetails({ ...catDetails, isLoaded: true, cat: resp })
        },
        (error) => {
          setCatDetails({ ...catDetails, isLoaded: true })
          console.log("Error: " + error);
        })
    }
  });

  if (catDetails.isLoaded === false) {
    return (<Loader />);
  }
  return (
    <CatCard cat={catDetails.cat} buttonAction={() => act()} />
  );
}

