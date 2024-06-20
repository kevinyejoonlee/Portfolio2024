import React from 'react';


import './ImageCollage.css';

import guitar from "../../assets/CollagePhotos/guitar2.jpg"; 
// import kcphoto from "../../assets/CollagePhotos/kcphoto3.jpg"; 
import tunnel from "../../assets/CollagePhotos/tunnel.JPG"; 
import laptop from "../../assets/CollagePhotos/laptop.jpg"; 
import traveled from "../../assets/CollagePhotos/saltlake.JPG"; 
import team from "../../assets/CollagePhotos/team_photo.JPG"; 

const ImageCollage = () => {

  

  return (
    <section className='ImageCollage'>
      <div className="Collage_Container">
        <img className="imageFormat" src={guitar} alt="guitar"></img>
        <img className="imageFormat" src={laptop} alt="kcphoto"></img>
        <img className="imageFormat" src={tunnel} alt="laptop"></img>
        <img className="imageFormat" src={traveled} alt="BJJ"></img>
        <img className="imageFormat" src={team} alt="team"></img>
      </div>
    </section>
  );
}

export default ImageCollage;
