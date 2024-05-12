import React from 'react';
import Navbar from './Navbar';
import handImg from '../Components/Assests/HandPic/handphoto.jpg';
import './Home.css';

function Home() {
  return (
    <div >
      <Navbar />
      <img className='handImage' src={handImg} alt="Hand" />
    </div>

  )
}

export default Home;