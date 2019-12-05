import React from 'react'
import styles from './carouselItem.css';

const CarouselItem = (props) => {
  return (
    <div onClick={() => props.clickHandler(props.image)}>
      <img src={props.image.img_url} className={styles.img_style} />
    </div>
  );
};

export default CarouselItem;