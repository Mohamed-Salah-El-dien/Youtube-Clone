import React from 'react';
import { useSelector } from 'react-redux';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/img7.jpg';
import img8 from '../../assets/images/img8.jpg';
import Card from './Card/Card';
import './Grid.css';

const Grid = () => {
  const toggle = useSelector((state) => state.toggle.active);

  return (
    <div className={toggle ? 'grid active' : 'grid'}>
      <Card
        img={img1}
        title="how can you build a lego set under 15 minutes"
        name="Lego World"
        views="45k"
        time="3 days ago"
      />

      <Card
        img={img2}
        title="finally buying my dream car"
        name="john skidmen"
        views="1.6M"
        time="2 months ago"
      />

      <Card
        img={img3}
        title="My first live match at the camp nou"
        name="live for football"
        views="625K"
        time="6 months ago"
      />

      <Card
        img={img4}
        title="Honey moon vlog"
        name="Nick & kacey"
        views="1M"
        time="2 weeks ago"
      />

      <Card
        img={img5}
        title="facing my fear and climbing everest"
        name="Travel with Cal"
        views="5M"
        time="2 years ago"
      />

      <Card
        img={img6}
        title="tips and tricks to win at billiards"
        name="Tricks for kicks"
        views="3M"
        time="1 years ago"
      />

      <Card
        img={img7}
        title="Why are Owls so OP"
        name="Animal's Secrets"
        views="7M"
        time="7 months ago"
      />

      <Card
        img={img8}
        title="Learning chess step by step"
        name="jack stone"
        views="3M"
        time="3 years ago"
      />
    </div>
  );
};

export default Grid;
