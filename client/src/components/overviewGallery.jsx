import React, { Suspense, lazy } from 'react';
// import Carousel from './carousel/carousel.jsx';
const Carousel = React.lazy(() => import('./carousel/carousel.jsx'));
import Popup from './popup/popup.jsx';

import styles from "./overviewGallery.css";
import styles_popup from "./popup/popup.css";

// const url = 'http://localhost:3001/';
const url = 'http://54.219.170.252/';

const imgPlaceholders = [
  {id: 1, img_url: 'https://i.imgur.com/yuTP4gp.jpg'},
  {id: 2, img_url: 'https://i.imgur.com/ETphUsB.jpg'},
  {id: 3, img_url: 'https://i.imgur.com/PTgFa7W.jpg'},
  {id: 4, img_url: 'https://i.imgur.com/Kdfy419.jpg'},
  {id: 5, img_url: 'https://i.imgur.com/BVzsH0n.jpg'},
]

class OverviewGallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      locationId: null,
      locationData: [],
      images: [],
      // images: imgPlaceholders,

      showPopup: false,
      popupImage: null,
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.popupSliderHandler = this.popupSliderHandler.bind(this);
    this.popupGalleryHandler = this.popupGalleryHandler.bind(this);
  }

  componentDidMount () {
    const endpoint = window.location.pathname;
    var locationId;
    if (endpoint.length === 1) {
      // locationId = Math.floor(Math.random() * 100 + 1);
      locationId = 1;
    } else {
      locationId = endpoint.split('/')[1];
    }

    fetch(url + 'overviewGallery/' + locationId, {
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
        locationData: result.locationData,
        images: result.images
      })
    });

    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick (e) {
    e.stopPropagation();
    if (e.target.className === styles_popup.popup) {
      this.togglePopup();
    }
  }
  
  togglePopup (image) {
    this.setState({
      showPopup: !this.state.showPopup,
      popupImage: image || null,
    });
  }

  popupSliderHandler (image, direction) { // direction: 0 for left, 1 for right
    var imgIndex = this.state.images.indexOf(image);
    if (direction === 0) {
      if (imgIndex > 0) {
        this.setState({
          popupImage: this.state.images[imgIndex - 1]
        });
      }
    } else {
      if (imgIndex < this.state.images.length - 1) {
        this.setState({
          popupImage: this.state.images[imgIndex + 1]
        });
      }
    }
  }

  popupGalleryHandler (image) {
    this.setState({
      popupImage: image || null,
    });
  }

  render () {
    return (
      <div className={styles.global} ref={node => this.node = node}>
        {/* <div><Carousel images={this.state.images} clickHandler={this.togglePopup} /></div> */}

        <Suspense fallback={<div>Loading...</div>}>
          <div><Carousel images={this.state.images} clickHandler={this.togglePopup} /></div>
        </Suspense>

        {this.state.showPopup && <Popup closePopup={this.togglePopup} locationData={this.state.locationData[0]} images={this.state.images} popupImage={this.state.popupImage} popupSliderHandler={this.popupSliderHandler} popupGalleryHandler={this.popupGalleryHandler} />}
      </div>
    );
  }
}

export default OverviewGallery;