import React from 'react';
import Carousel from './carousel.jsx';

const url = 'http://localhost:3000/';

class OverviewGallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      images: []
    };
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
      console.log(result);
      this.setState({
        images: result
      });
    });
  }
  
  render () {
    return (
      <div>
        <h1>Overview Gallery</h1>
        <div><Carousel images={this.state.images} /></div>
      </div>
    );
  }
}

export default OverviewGallery;