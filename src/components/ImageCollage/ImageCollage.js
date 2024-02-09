import React from 'react';

import './ImageCollage.css';

import guitar from "../../assets/CollagePhotos/guitar2.jpg"; 
import kcphoto from "../../assets/CollagePhotos/kcphoto3.jpg"; 

import laptop from "../../assets/CollagePhotos/laptop.jpg"; 
import BJJ from "../../assets/CollagePhotos/bjj_win.JPG"; 
import team from "../../assets/CollagePhotos/team_photo.JPG"; 

const ImageCollage = () => {
  return (
    <section class='ImageCollage'>

      <div class="Collage_Container">
        <img class="imageFormat" src={guitar} alt=""></img>
        <img class="imageFormat" src={kcphoto} alt=""></img>
        <img class="imageFormat" src={laptop} alt=""></img>
        <img class="imageFormat" src={BJJ} alt=""></img>
        <img class="imageFormat" src={team} alt=""></img>
      </div>
      

    </section>
  )
}

export default ImageCollage;
