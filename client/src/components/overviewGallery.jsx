import React from 'react';
import styles from "./style.css";
import Carousel from './carousel.jsx';
import Popup from './popup.jsx';

const url = 'http://localhost:3000/';

class OverviewGallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showPopup: false,
      images: []
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount () {
    var randomLocationId = Math.floor(Math.random() * 100 + 1);
    fetch(url + 'overviewGallery/sample/' + randomLocationId, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .catch( err => {
      console.error(err);
    })
    .then( result => {
      return result.json();
    })
    .then( result => {
      this.setState({
        images: result
      });
    });
  }
  
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render () {
    return (
      <div className={styles.test}>
        <h1>Overview Gallery</h1>
        {/* <div><Carousel images={this.state.images} /></div> */}
        
        <button onClick={this.togglePopup}>A Button</button>  

        {this.state.showPopup ? <Popup text='Beware.' closePopup={this.togglePopup.bind(this)} /> : null}
      </div>
    );
  }
}

export default OverviewGallery;