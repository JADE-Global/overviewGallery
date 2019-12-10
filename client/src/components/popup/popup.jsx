import React, { Suspense, lazy } from 'react';
import styles from "./popup.css";

import PopupGallery from '../popupGallery/popupGallery.jsx';
const PopupSlider = React.lazy(() => import('../popupSlider/popupSlider.jsx'));

class Popup extends React.Component {  
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          <div className={styles.container}>
            <div className={styles.close} onClick={() => this.props.closePopup()}>
              <span className={styles.close_text}>Close</span> X
            </div>

            <Suspense fallback={<div className={styles.slider}>Loading...</div>}>
              <div className={styles.slider}>
                <PopupSlider locationData={this.props.locationData} image={this.props.popupImage} images={this.props.images} clickHandler={this.props.popupSliderHandler} />
              </div>
            </Suspense>

            <div className={styles.gallery}>
              <PopupGallery locationData={this.props.locationData} images={this.props.images} selected={this.props.popupImage} clickHandler={this.props.popupGalleryHandler} />
            </div>
          </div>

        </div>  
      </div>  
    );
  }
}

export default Popup;