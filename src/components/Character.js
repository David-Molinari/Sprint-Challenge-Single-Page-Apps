import React, { useState, useEffect } from 'react';
import Axios from "axios";
import styled from "styled-components";

const Character = props => {
  const [character, setCharacter] = useState();
 
  useEffect(() => {

    // change below and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    const id = props.match.params.id;

       Axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props]);

  const Div = styled.div `
    text-align: center; 
    `;


  if (!character) {
    return <Div>No character information...</Div>;}


  const { name, status, species, gender } = character;
  return (
    <Div className="save-wrapper">
        <div className="character-card">
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h4>{species}</h4>
            <h5>{gender}</h5>
        </div>
    </Div>
  )};

export default Character;