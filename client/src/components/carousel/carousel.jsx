import React from 'react';
import styles from './carousel.css';

function Carousel (props) {
  const imageList = props.images.map((image) => {
    return (
      <span key={image.id} id={`#carouselImg-${image.id}`} onClick={() => props.clickHandler(image.id)}>
        <img src={image.img_url} className={styles.img_style} />
      </span>
    );
  });
 
  return (
    <div className={styles.container}>{imageList}</div>
  );
}
  
export default Carousel;