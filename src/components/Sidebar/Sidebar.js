import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFile,
  faTableList,
  faFileArchive,
  faPaperclip,
  faFileVideo,
  faCalendarXmark,
  faHandHoldingHeart,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/fontawesome-free-regular';
import { useSelector } from 'react-redux';
import './Sidebar.css';

const Sidebar = () => {
  const toggle = useSelector((state) => state.toggle.active);

  return (
    <div className={toggle ? 'sidebar active' : 'sidebar'}>
      <div className="container">
        <div className={toggle ? 'btn active' : 'btn'} title="Home">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Home</h4>
        </div>

        <div className={toggle ? 'btn active' : 'btn'} title="Explore">
          <FontAwesomeIcon icon={faCompass} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Explore</h4>
        </div>

        <div className={toggle ? 'btn active' : 'btn'} title="Shorts">
          <FontAwesomeIcon icon={faFile} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Shorts</h4>
        </div>

        <div className={toggle ? 'btn active' : 'btn'} title="Subscriptions">
          <FontAwesomeIcon icon={faTableList} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Subscriptions</h4>
        </div>

        <div className={toggle ? 'btn active' : 'btn'} title="Library">
          <FontAwesomeIcon icon={faFileArchive} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Library</h4>
        </div>

        <div className={toggle ? 'line active' : 'line '}></div>

        <div className={toggle ? 'btn active' : 'btn hidden'} title="History">
          <FontAwesomeIcon icon={faPaperclip} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>History</h4>
        </div>

        <div
          className={toggle ? 'btn active' : 'btn hidden'}
          title="Your videos"
        >
          <FontAwesomeIcon icon={faFileVideo} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Your videos</h4>
        </div>

        <div
          className={toggle ? 'btn active' : 'btn hidden'}
          title="Watch later"
        >
          <FontAwesomeIcon icon={faCalendarXmark} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Watch later</h4>
        </div>

        <div
          className={toggle ? 'btn active' : 'btn hidden'}
          title="Liked videos"
        >
          <FontAwesomeIcon icon={faHandHoldingHeart} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Liked videos</h4>
        </div>

        <div
          className={toggle ? 'btn active' : 'btn hidden'}
          title="Created playlists"
        >
          <FontAwesomeIcon icon={faPlayCircle} className="icon" />
          <h4 className={toggle ? 'text active' : 'text'}>Created playlists</h4>
        </div>

        <div className={toggle ? 'line active' : 'line '}></div>
      </div>
    </div>
  );
};

export default Sidebar;
