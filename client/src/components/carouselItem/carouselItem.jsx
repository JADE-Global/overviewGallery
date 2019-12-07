import React from 'react'
import styles from './carouselItem.css';

const CarouselItem = (props) => {
  return (
    <div className={styles.container} onClick={() => props.clickHandler(props.image)}>
      <div className={styles.item} style={{ backgroundImage: `url(${props.image.img_url})` }} >
      </div>
    </div>
  );
};

export default CarouselItem;