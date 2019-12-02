import React from 'react';

const url = 'http://localhost:3000/';

class OverviewGallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    var randomLocationId = Math.floor(Math.random() * 100 + 1);
    // fetch(url + 'overviewGallery/sample/' + randomLocationId, {
    fetch(url + 'overviewGallery/sample/' + 5, {
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
      console.log(JSON.stringify(result));
    });
  }
  
  render () {
    return (
      <div>
        <h1>Overview Gallery</h1>
      </div>
    );
  }
}

export default OverviewGallery;