import React from 'react';
import styles from "./style.css";

function Carousel (props) {
  const imageList = props.images.map((image) => {
    return (
      <li key={image.id}><img src={image.img_url} height="300" /></li>
    );
  });
 
  return (
    <div className={styles.carousel}><ul>{imageList}</ul></div>
  );
  }
  
export default Carousel;