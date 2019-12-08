import React from 'react';
import styles from "./popupSlider.css";

const PopupSlider = (props) => {
  const businessOwner = (
    <div>
      {props.locationData.name}
      From the business owner.
    </div>
  );

  const regularUser = (
    <div>
      {props.image.owner.name}
    </div>
  );

  return (
    <div>
      <div><img src={props.image.img_url} /></div>
      <div>{props.image.createdAt}</div>
      <div>{props.image.title}</div>
      <div>{(props.locationData.ownerId === props.image.owner.id) ? businessOwner : regularUser}</div>
      <div>
        <button onClick={() => props.clickHandler(props.image, 0)}>LEFT</button>
        <button onClick={() => props.clickHandler(props.image, 1)}>RIGHT</button>
      </div>
    </div>
  );
};

export default PopupSlider;

// <div className={styles.item} style={{ backgroundImage: `url(${props.image.img_url})` }} ></div>