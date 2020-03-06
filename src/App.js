import React from "react";
import {
  Route,
} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/character/:id" render={props => <Character {...props} />} />
      <Route path ="/" component = {SearchForm} />
      <Route path ="/" component = {CharacterList} />
    </main>
  );
}
