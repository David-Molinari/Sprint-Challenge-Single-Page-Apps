import React, { useState } from "react";
import styled from "styled-components";


export default function SearchForm(props) {

  const SearchDiv = styled.div`
    text-align: center;
    padding-top: 2.5%;
    `;

  return (
    <SearchDiv className="Search-Form">
      <form>
        <select id="names" name="characters" onChange = {event => {
          const id = event.target.value;
          const pusher = (props) => {
            props.history.push(`/character/${id}`)
          };
          return pusher(props);
          }} 
        >

          <option value='0'>search by name</option>
          <option value='1'>Rick Sanchez</option>
          <option value='2'>Morty Smith</option>
          <option value='3'>Summer Smith</option>
          <option value='4'>Beth Smith</option>
          <option value='5'>Jerry Smith</option>
          <option value='6'>Abadango Cluster Princess</option>
          <option value='7'>Abradolf Lincler</option>
          <option value='8'>Adjudicator Rick</option>
          <option value='9'>Agency Director</option>
          <option value='10'>Alan Rails</option>
          <option value='11'>Albert Einstein</option>
          <option value='12'>Alexander</option>
          <option value='13'>Alien Googah</option>
          <option value='14'>Alien Morty</option>
          <option value='15'>Alien Rick</option>
          <option value='16'>Amish Cyborg</option>
          <option value='17'>Annie</option>
          <option value='18'>Antenna Morty</option>
          <option value='19'>Antenna Rick</option>
          <option value='20'>Ants in my Eyes Johnson</option>
        </select>
      </form>
    </SearchDiv>
  );
  }