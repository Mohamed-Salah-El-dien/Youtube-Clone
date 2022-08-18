import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/fontawesome-free-solid';
import { useSelector } from 'react-redux';
import './Card.css';

const Card = ({ img, title, name, views, time }) => {
  const toggle = useSelector((state) => state.toggle.active);

  return (
    <div className={toggle ? 'card active' : 'card '}>
      <div className="img">
        <img src={img} alt="" />
      </div>

      <div className="title">
        <FontAwesomeIcon icon={faUserCircle} className="title-icon" />
        <h1 className="title-text">{title}</h1>
      </div>
      <div className="info">
        <h3>{name}</h3>
        <h3>
          {views} views | {time}
        </h3>
      </div>
    </div>
  );
};

export default Card;
