import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import {
  faSearch,
  faMicrophone,
  faVideoCamera,
  faUserCircle,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleActions } from '../../store/toggleSlice';
import youtube from '../../../assets/images/youtube.png';
import './Top.css';

const Top = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleActions.toggleActive());
  };

  return (
    <div className="header">
      <div className="top">
        <div className="top-left">
          <FontAwesomeIcon
            icon={faBars}
            className="bars"
            onClick={handleClick}
          />
          <div className="youtube" title="Youtube Home">
            <img src={youtube} alt="" className="tube" />

            <p className="tube-text">YouTube</p>
          </div>
        </div>

        <div className="top-mid">
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Search"
          />

          <button class="search-btn">
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              title="Search"
            />
          </button>

          <button class="mic-btn">
            <FontAwesomeIcon
              icon={faMicrophone}
              className="mic-icon"
              title="Search with your voice"
            />
          </button>
        </div>

        <div className="top-right">
          <button className="right-btns">
            <FontAwesomeIcon
              icon={faVideoCamera}
              className="right-icons"
              title="Create"
            />
          </button>

          <button className="right-btns">
            <FontAwesomeIcon
              icon={faBell}
              className="right-icons"
              title="Notification"
            />
          </button>

          <button className="right-btns">
            <FontAwesomeIcon icon={faUserCircle} className="right-icons" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
