import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home tab">
      <img
        className="personal-photo"
        src="./assets/myphoto.jpg"
        alt="Vadim Martin"
      />
      
      <div className="name-box">
        <h1 className="name">Vadim Martin</h1>
        <p className="business-title">Web Developer</p>
      </div>
    </div>
  );
};

export default Home;