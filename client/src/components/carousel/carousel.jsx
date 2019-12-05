import React from 'react';
import styles from './carousel.css';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      position: 0,
    };
  }
  
  render () {
    const imageList = this.props.images.map((image) => {
      return (
        <span key={image.id} id={`#carouselImg-${image.id}`} onClick={() => this.props.clickHandler(image.id)}>
          <img src={image.img_url} className={styles.img_style} />
        </span>
      );
    });

    return (
      <div className={styles.container}>
        {imageList}
      </div>
    );
  }
}

export default Carousel;