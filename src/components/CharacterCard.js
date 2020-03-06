import React from "react";
import {
  Link,
} from "react-router-dom";
import styled from "styled-components";

export default function CharacterCard(props) {

  const Div = styled.div `

    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 2.5%;

  `;

  return (
      <Div>
        <Link to={`/character/${props.id}`}>{props.name}</Link>
      </Div>
  )
}
