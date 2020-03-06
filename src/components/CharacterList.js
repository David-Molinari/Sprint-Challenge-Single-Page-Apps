import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const Div = styled.div`
    text-align: center;
    `;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      Axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(characters => {setCharacters(characters.data.results);})
        .catch(err => console.log(err));
  }, []);

  return (
    <Div>
      <section className="character-list">
        {/* <h2>{TODO: `array.map()` over your state here!}</h2> */}
        {characters.map(character => {
          const id = character.id;
          return <CharacterCard name = {character.name} id = {id} />
        })}
      </section>
    </Div>
  );
}