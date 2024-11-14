import React from 'react';
import './ImageCollage.css';

import guitar from "../../assets/CollagePhotos/guitar2.jpg"; 
import tunnel from "../../assets/CollagePhotos/tunnel.jpg"; 
import laptop from "../../assets/CollagePhotos/laptop.jpg"; 
import traveled from "../../assets/CollagePhotos/saltlake.jpg"; 
import team from "../../assets/CollagePhotos/team_photo.jpg"; 
import books from "../../assets/CollagePhotos/books.jpg"; 

const ImageCollage = () => {

  return (
    <section className='ImageCollage'>
      <div className="Collage_Container">
        <img className="imageFormat" src={guitar} alt="guitar" loading="lazy"></img>
        <img className="imageFormat" src={books} alt="laptop" loading="lazy"></img>
        <img className="imageFormat" src={tunnel} alt="tunnel" loading="lazy"></img>
        <img className="imageFormat" src={traveled} alt="traveled" loading="lazy"></img>
        <img className="imageFormat" src={team} alt="team" loading="lazy"></img>
      </div>
    </section>
  );
}

export default ImageCollage;
