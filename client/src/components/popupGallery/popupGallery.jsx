import React, { Suspense, lazy } from 'react';
import styles from "./popupGallery.css";

import GridIcon from './icons/gridIcon.jsx';
import ChevronRightIcon from './icons/chevronrightIcon.jsx';

const PopupGalleryImageList = React.lazy(() => import('./popupGalleryImageList.jsx'));

const PopupGallery = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Photos for {props.locationData.name}
        <div className={styles.title_seeall}>See All {props.images.length}</div>
      </div>

      <Suspense fallback={<div className={styles.gallery_wrapper}>Loading...</div>}>
        <div className={styles.gallery_wrapper}>
          <PopupGalleryImageList images={props.images} selected={props.selected} clickHandler={props.clickHandler} />
        </div>
      </Suspense>

      <div className={styles.ui_buttons}>
        <div className={styles.ui_left}><GridIcon /> <span className={styles.ui_text}>See All Photos</span></div>
        <div className={styles.ui_arrow}><ChevronRightIcon /></div>
      </div>
    </div>
  );
};

export default PopupGallery;