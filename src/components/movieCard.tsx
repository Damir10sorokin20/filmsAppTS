import React from "react";

interface MovieProps {
  title: string;
  image: string;
  rating: number;
  year: number;
}

const MovieCard: React.FC<MovieProps> = ({ title, image, rating, year }) => (
  <div className="movie-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>Год: {year}</p>
    <p>Рейтинг: ⭐ {rating}</p>
  </div>
);

export default MovieCard;
