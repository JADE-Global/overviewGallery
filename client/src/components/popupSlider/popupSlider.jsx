import React from 'react';
import moment from 'moment';
import styles from "./popupSlider.css";

import FriendsIcon from './icons/friendsIcon.jsx';
import ReviewIcon from './icons/reviewIcon.jsx';
import ShareIcon from './icons/shareIcon.jsx';
import ReportIcon from './icons/reportIcon.jsx';
import ArrowUpIcon from './icons/arrowupIcon.jsx';
import ArrowDownIcon from './icons/arrowdownIcon.jsx';
import ChevronLeftIcon from './icons/chevronleftIcon.jsx';
import ChevronRightIcon from './icons/chevronrightIcon.jsx';

const PopupSlider = (props) => {
  let nameDisplay = (fullname) => {
    let result = '';
    let nameItems = fullname.split(' ');
    for (var i = 0; i < nameItems.length; i++) {
      if (i === 0) {
        result += nameItems[i];
      } else {
        result += ' ' + nameItems[i][0] + '.';
      }
    }
    return result;
  }

  const businessOwner = (
    <div>
      <div className={styles.user_name}>{props.image.owner.name}</div>
      <div className={styles.date}>From the business owner.</div>
    </div>
  );

  const regularUser = (
    <div>
      <div className={styles.user_name}>{nameDisplay(props.image.owner.name)}</div>
      <div className={styles.user_numbers}><FriendsIcon /> {props.image.owner.friendCount} <ReviewIcon /> {props.image.owner.starCount}</div>
      {(props.image.owner.eliteYear === null) ? null : <div className={styles.user_elite}>Elite {moment(props.image.owner.eliteYear, "YYYY").format("'YY")}</div>}
    </div>
  );

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${props.image.img_url})`}}>
      
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
        <div className={styles.ui_button}><ShareIcon /></div>
        <div className={styles.ui_button}><ReportIcon /></div>
        <div className={styles.ui_text}><ArrowUpIcon /> Helpful</div>
        <div className={styles.ui_text}><ArrowDownIcon /> Not Helpful</div>
      </div>
      
      {(props.image.id === props.images[0].id) ? null : <div className={`${styles.arrowbutton} ${styles.left_button}`} onClick={() => props.clickHandler(props.image, 0)}><ChevronLeftIcon /></div>}
      {(props.image.id === props.images[props.images.length - 1].id) ? null : <div className={`${styles.arrowbutton} ${styles.right_button}`} onClick={() => props.clickHandler(props.image, 1)}><ChevronRightIcon /></div>}
      
    </div>
  );
};

export default PopupSlider;