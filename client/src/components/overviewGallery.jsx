import React from 'react';
import styles from "./style.css";
import Carousel from './carousel.jsx';
import Popup from './popup.jsx';

const url = 'http://localhost:3000/';

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
      showPopup: false,
      // images: []
      images: imgPlaceholders
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount () {
    // var randomLocationId = Math.floor(Math.random() * 100 + 1);
    // fetch(url + 'overviewGallery/sample/' + randomLocationId, {
    // fetch(url + 'overviewGallery/sample/' + 2, {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // })
    // .catch( err => {
    //   console.error(err);
    // })
    // .then( result => {
    //   return result.json();
    // })
    // .then( result => {
    //   this.setState({
    //     images: result
    //   });
    // });
  }
  
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render () {
    return (
      <div className={styles.global}>
        <h1>Overview Gallery</h1>
        <div><Carousel images={this.state.images} /></div>
        {/* <div className={styles.carousel}></div> */}
        
        <button onClick={this.togglePopup}>A Button</button>
        {this.state.showPopup ? <Popup text='Beware.' closePopup={this.togglePopup.bind(this)} /> : null}
      </div>
    );
  }
}

export default OverviewGallery;