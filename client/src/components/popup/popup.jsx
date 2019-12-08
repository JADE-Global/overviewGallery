import React from 'react';
import styles from "./popup.css";

import PopupSlider from '../popupSlider/popupSlider.jsx';
import PopupGallery from '../popupGallery/popupGallery.jsx';

class Popup extends React.Component {  
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          <button onClick={() => this.props.closePopup()}>Close</button>
          <PopupSlider locationData={this.props.locationData} image={this.props.popupImage} clickHandler={this.props.popupSliderHandler} />
          <PopupGallery locationData={this.props.locationData} images={this.props.images} clickHandler={this.props.popupGalleryHandler} />
        </div>  
      </div>  
    );
  }
}

export default Popup;