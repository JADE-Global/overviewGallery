import React from 'react';
import moment from 'moment';
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
      <div className={styles.user_name}>{props.image.owner.name}</div>
      <div className={styles.user_numbers}>§{props.image.owner.friendCount} ★{props.image.owner.starCount}</div>
      {(props.image.owner.eliteYear === null) ? null : <div className={styles.user_elite}>{props.image.owner.eliteYear}</div>}
    </div>
  );

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${props.image.img_url})` }}>
      <div className={styles.description}>
        <div className={styles.title}>{props.image.title}</div>
        <div className={styles.date}>{moment(props.image.createdAt).format('MMMM D, YYYY')}</div>
      </div>
      <div className={styles.userinfo}>
        <table><tbody>
          <tr>
            <td>
              <div><img className={styles.img_avatar} src={props.image.owner.avatar_url} /></div>
            </td>
            <td>
              <div>{(props.locationData.ownerId === props.image.owner.id) ? businessOwner : regularUser}</div>
            </td>
          </tr>
          </tbody></table>
        
      </div>
      <div className={styles.ui_buttons}>
      </div>
      
      {/* <div>
        <button onClick={() => props.clickHandler(props.image, 0)}>LEFT</button>
        <button onClick={() => props.clickHandler(props.image, 1)}>RIGHT</button>
      </div> */}
    </div>
  );
};

export default PopupSlider;

// <div className={styles.item} style={{ backgroundImage: `url(${props.image.img_url})` }} ></div>