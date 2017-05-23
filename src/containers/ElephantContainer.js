import React, { Component } from 'react';
import Elephant from '../components/Elephant';

class ElephantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { babyElephant: false };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    let nextBabyElephant = !this.state.babyElephant;
    this.setState({ babyElephant: nextBabyElephant });
  }

  render() {
    let image, text;

    if (this.state.babyElephant) {
      image = 'http://akns-images.eonline.com/eol_images/Entire_Site/201438/rs_560x415-140408154504-1024.baby-elephant-grass.ls.4814.jpg';
      text = 'Look at the baby elephant!';
    } else {
      image = 'https://animalcorner.co.uk/wp-content/uploads/2015/02/elephant-1.jpg';
      text = 'that\'s a big elephant';
    }

    return (
      <div>
        <Elephant
          image={image}
          onClick={this.handleClick}
          text={text}
        />
      </div>
    );
  }
}

export default ElephantContainer;
