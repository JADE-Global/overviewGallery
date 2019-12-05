import React from 'react';
import styles from './carousel.css';
import CarouselItem from '../carouselItem/carouselItem.jsx'

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      position: 0,
    };
  }
  
  render () {
    return (
      <div className={styles.container}>
        {this.props.images.map((image) => {
          return (
            <CarouselItem image={image} clickHandler={this.props.clickHandler} />
          );
        })}
      </div>
    );
  }
}

export default Carousel;