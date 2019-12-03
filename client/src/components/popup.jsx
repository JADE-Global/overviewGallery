import React from 'react';
// import './style.css';
import styles from "./style.css";

class Popup extends React.Component {
  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>Close</button>
        </div>  
      </div>  
    );
  }
}

export default Popup;