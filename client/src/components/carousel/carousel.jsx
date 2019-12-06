import React from 'react';
import styles from './carousel.css';
import CarouselItem from '../carouselItem/carouselItem.jsx'

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      position: 0,
    };
    this.clickRight = this.clickRight.bind(this);
  }

  clickRight () {
    const element = document.getElementsByClassName(styles.itemContainer)[0];
    element.scrollBy({
        top: 0,
        left: 500,
        behavior: 'smooth'
    });
    this.setState({
      position: this.state.position + 500,
    });
  }

  clickLeft () {
    const element = document.getElementsByClassName(styles.itemContainer)[0];
    element.scrollBy({
        top: 0,
        right: 500,
        behavior: 'smooth'
    });
    this.setState({
      position: this.state.position - 500,
    });
  }
  
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.itemContainer}>
          <button className={styles.button} onClick={() => this.clickRight()}>TINY SCREAMS</button>
          {this.props.images.map((image) => {
            return (
              <CarouselItem key={image.id} image={image} clickHandler={this.props.clickHandler} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;