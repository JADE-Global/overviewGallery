import React from 'react';
import styles from "./popupGallery.css";

const PopupGallery = (props) => {

  const imageList = props.images.map( image => (
    <div key={image.id} onClick={() => props.clickHandler(image)}>
      {/* <img className={styles.image} src={image.img_url} /> */}
    </div>
  ));

  return (
    <div>
      {imageList}
    </div>
  );
};

export default PopupGallery;