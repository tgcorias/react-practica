import React from 'react';
import '../assets/styles/components/Item.scss'

const Carousel = ({ cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}  />
    <div className="carousel-item__details">
      <div>             
        <img className="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon" />
        <img className="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon" />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
       {`${year} ${contentRating} ${duration}`}

      </p>
    </div>
  </div>
);

export default Carousel;