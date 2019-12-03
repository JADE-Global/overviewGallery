import React from 'react';

function Carousel (props) {
  const images = props.images;
  const imageList = images.map((image) => {
    return (
      <li><img src={image.img_url} height="300" /></li>
    );
  });
    
  return (
    <div><ul>{imageList}</ul></div>
  );
  }
  
export default Carousel;