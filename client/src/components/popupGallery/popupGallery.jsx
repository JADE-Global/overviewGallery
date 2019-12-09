import React from 'react';
import styles from "./popupGallery.css";

import GridIcon from './icons/gridIcon.jsx';
import ChevronRightIcon from './icons/ChevronRightIcon.jsx';

const PopupGallery = (props) => {

  let counter = 0;
  const imageList = props.images.map( image => {
    if (props.images.length > 5) {
      if (counter % 3 === 0) {
        console.log('full' + counter + image.id);
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
        console.log('left' + counter + image.id);
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
        console.log('right' + counter + image.id);
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
    <div className={styles.container}>
      <div className={styles.title}>
        Photos for {props.locationData.name}
        <div className={styles.title_seeall}>See All {props.images.length}</div>
      </div>
      <div className={styles.gallery_container}>
        {imageList}
      </div>
      <div className={styles.ui_buttons}>
        <div className={styles.ui_left}><GridIcon /> <span className={styles.ui_text}>See All Photos</span></div>
        <div className={styles.ui_arrow}><ChevronRightIcon /></div>
      </div>
    </div>
  );
};

export default PopupGallery;