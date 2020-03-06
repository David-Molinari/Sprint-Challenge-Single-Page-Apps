import React from "react";
import styled from "styled-components";

export default function WelcomePage() {

  const Div = styled.div`
    text-align: center;
    `;

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Div>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Div>
      </header>
    </section>
  );
}
