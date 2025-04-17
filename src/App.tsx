import React from "react";
import Header from "./components/Header";
import MovieList from "./components/movieList";
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <MovieList />
    </div>
  );
};

export default App;
