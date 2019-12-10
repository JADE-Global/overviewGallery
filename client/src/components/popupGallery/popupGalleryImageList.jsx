import React from 'react';
import styles from "./popupGallery.css";

const PopupGalleryImageList = (props) => {
  let counter = 0;
  const imageList = props.images.map( image => {
    if (props.images.length > 5) {
      if (counter % 3 === 0) {
        counter++;
        return (
          <div key={image.id} onClick={() => props.clickHandler(image)} className={styles.gallery_container}>
            {
              (image.id === props.selected.id) ? <div className={styles.gallery_item_selected} style={{ backgroundImage: `url(${image.img_url})`}}></div>
              : <div className={styles.gallery_item} style={{ backgroundImage: `url(${image.img_url})` }}></div>
            }
          </div>
        );
      } else if (counter % 3 === 1) {
        counter++;
        return (
          <div key={image.id} onClick={() => props.clickHandler(image)} className={styles.gallery_container}>
            {
              (image.id === props.selected.id) ? <div className={styles.gallery_item_selected} style={{ backgroundImage: `url(${image.img_url})`}}></div>
              : <div className={styles.gallery_item} style={{ backgroundImage: `url(${image.img_url})` }}></div>
            }
          </div>
        );
      } else {
        counter++;
        return (
          <div key={image.id} onClick={() => props.clickHandler(image)} className={styles.gallery_container}>
            {
              (image.id === props.selected.id) ? <div className={styles.gallery_item_selected} style={{ backgroundImage: `url(${image.img_url})`}}></div>
              : <div className={styles.gallery_item} style={{ backgroundImage: `url(${image.img_url})` }}></div>
            }
          </div>
        );
      }
    } else {
      return (
        <div key={image.id} onClick={() => props.clickHandler(image)} className={styles.gallery_container}>
          {
            (image.id === props.selected.id) ? <div className={styles.gallery_item_selected} style={{ backgroundImage: `url(${image.img_url})`}}></div>
            : <div className={styles.gallery_item} style={{ backgroundImage: `url(${image.img_url})` }}></div>
          }
        </div>
      );
    }
  });

  return (
    <div className={styles.gallery_box}>
      {imageList}
    </div>
  );
};

export default PopupGalleryImageList;