import React from 'react';
import styles from "./popupGallery.css";

const PopupGallery = (props) => {

  const imageList = props.images.map( image => (
    <div key={image.id} onClick={() => props.clickHandler(image)} className={styles.gallery_container}>
      {(image.id === props.selected.id) ? 
      <div className={styles.gallery_selected} style={{ backgroundImage: `url(${image.img_url})`}}></div>
      :
      <div className={styles.gallery_item} style={{ backgroundImage: `url(${image.img_url})` }}></div>}
      {/* <img className={styles.image} src={image.img_url} /> */}
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Photos for {props.locationData.name}
        <div className={styles.title_seeall}>See All {props.images.length}</div>
      </div>
      <div className={styles.gallery_container}>
        {imageList}
      </div>
      <div className={styles.ui_buttons}>
        <div className={styles.ui_left}>■ <span className={styles.ui_text}>See All Photos</span></div>
        <div className={styles.ui_arrow}>></div>
      </div>
    </div>
  );
};

export default PopupGallery;