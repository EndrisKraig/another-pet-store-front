import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetRequest, PostRequestNew } from "../service/FetchService";
import Loader from "./Loader";
import AnimalCard from "./AnimalCard";
import useToken from "../hook/useToken";

export default function AnimalDetails() {
  const [animalDetails, setAnimalDetails] = useState({ isLoaded: false });
  const { id } = useParams();
  const { token, setToken } = useToken();
  console.log(token);
  const act = () => {
    PostRequestNew("/animals/" + id, 
    {},
     (resp) => { window.location.href = "/animals/" + id + "/success" },
    (error) => { window.location.href = "/animals/" + id + "/error" }, token);
  };
  useEffect(() => {
    if (animalDetails.isLoaded === false) {
      GetRequest("/animals/" + id,
        (resp) => {
          setAnimalDetails({ ...animalDetails, isLoaded: true, animal: resp })
        },
        (error) => {
          setAnimalDetails({ ...animalDetails, isLoaded: true })
          console.log("Error: " + error);
        })
    }
  });

  if (animalDetails.isLoaded === false) {
    return (<Loader />);
  }
  return (
    <AnimalCard animal={animalDetails.animal} buttonAction={() => act()} />
  );
}

