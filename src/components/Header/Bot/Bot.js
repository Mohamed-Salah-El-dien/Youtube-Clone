import React from 'react';
import { useSelector } from 'react-redux';
import './Bot.css';

const Bot = () => {
  const toggle = useSelector((state) => state.toggle.active);

  return (
    <div className={toggle ? 'bot active' : 'bot'}>
      <div className="slide-container">
        <div className="slide">
          <h3 className="slide-text">All</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Gaming</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Music</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">News</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Taste</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Live</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Sports</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Coding</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Weather</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Colours</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">History</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Animlas</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Fps</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">MMO</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Reddit</h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">Sci-fi films</h3>
        </div>
      </div>
    </div>
  );
};

export default Bot;
