import React from 'react';
import styles from './carousel.css';
import CarouselItem from '../carouselItem/carouselItem.jsx'

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      position: 0,
    };
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  }

  clickLeft () {
    const element = document.getElementsByClassName(styles.item_container)[0];
    element.scrollBy({
        top: 0,
        left: -500,
        behavior: 'smooth'
    });
    if (this.state.position >= 500) {
      this.setState({
        position: this.state.position - 500,
      });
    }
  }

  clickRight () {
    const element = document.getElementsByClassName(styles.item_container)[0];
    element.scrollBy({
        top: 0,
        left: 500,
        behavior: 'smooth'
    });
    if (this.state.position <= this.props.images.length * 400 - 500) {
      this.setState({
        position: this.state.position + 500,
      });
    }
  }
  
  render () {
    console.log('position: ' + this.state.position);
    return (
      <div className={styles.container}>
        <div className={styles.scroll_container}>
          <button className={`${styles.button} ${styles.left_button}`} onClick={() => this.clickLeft()}></button>
          <button className={`${styles.button} ${styles.right_button}`} onClick={() => this.clickRight()}></button>
        </div>
        <div className={styles.item_container}>
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