import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./movieCard";

interface Movie {
  id: number;
  name: string;
  poster: { url: string };
  rating: { kp: number };
  year: number;
}

const API_KEY = "A9RFXCA-EJ7MRYX-G3MV14E-B6TYAF3"; 

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12", {
          headers: {
            "X-API-KEY": API_KEY,
          },
        });
        setMovies(response.data.docs); 
      } catch (error) {
        console.error("Ошибка при загрузке фильмов:", error);
      }
    };

    fetchMovies(); 
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.name}
          image={movie.poster?.url}
          rating={movie.rating?.kp}
          year={movie.year}
        />
      ))}
    </div>
  );
};

export default MovieList;
