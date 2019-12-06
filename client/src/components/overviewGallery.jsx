import React from 'react';
import styles from "./overviewGallery.css";
import Carousel from './carousel/carousel.jsx';
import Popup from './popup/popup.jsx';

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
      popupImage: null,
      // images: []
      images: imgPlaceholders
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick (e) {
    if (this.node.contains(e.target)) {
      console.log(e.target);
      console.log(this.node);
      return;
    }
  }
  
  togglePopup (image) {
    console.log(image);
    this.setState({
      showPopup: !this.state.showPopup,
      popupImage: image ? image : null,
    });
  }

  render () {
    return (
      <div className={styles.global} ref={node => this.node = node}>
        <div><Carousel images={this.state.images} clickHandler={this.togglePopup} /></div>
        
        <button className={styles.button} onClick={() => this.togglePopup()}>A Button</button>
        {this.state.showPopup ? <Popup text='Beware.' closePopup={this.togglePopup} /> : null}
      </div>
    );
  }
}

export default OverviewGallery;