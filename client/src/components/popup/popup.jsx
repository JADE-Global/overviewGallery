import React from 'react';
import styles from "./popup.css";

class Popup extends React.Component {
  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          <button onClick={this.props.closePopup}>Close</button>
        </div>  
      </div>  
    );
  }
}

export default Popup;