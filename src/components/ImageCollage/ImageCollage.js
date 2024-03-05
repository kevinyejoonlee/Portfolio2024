import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import './ImageCollage.css';

import guitar from "../../assets/CollagePhotos/guitar2.jpg";
import kcphoto from "../../assets/CollagePhotos/kcphoto3.jpg";
import laptop from "../../assets/CollagePhotos/laptop.jpg";
import BJJ from "../../assets/CollagePhotos/bjj_win.JPG";
import team from "../../assets/CollagePhotos/team_photo.JPG";

const ImageCollage = () => {
  const tiltRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const images = [guitar, kcphoto, laptop, BJJ, team];
  const totalImages = images.length; 

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      const nodes = tiltRef.current.querySelectorAll('.imageFormat');
      VanillaTilt.init(nodes, {
        max: 25,
        speed: 400,
      });

      nodes.forEach((node, index) => {
        const tiltDegree = [0, 2, 3].includes(index) ? 2 : -2;
        node.style.transform = `rotate(${tiltDegree}deg)`;
      });
    }
  }, [imagesLoaded, totalImages]); 

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1); 
  };

  return (
    <section className='ImageCollage' ref={tiltRef}>
      <div className="Collage_Container">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            className="imageFormat"
            src={imageSrc}
            alt={`image-${index}`}
            onLoad={handleImageLoad} 
            style={{ visibility: imagesLoaded === totalImages ? 'visible' : 'hidden' }} 
          />
        ))}
      </div>
    </section>
  );
}

export default ImageCollage;
