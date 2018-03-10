import React, { Component } from 'react';
import { connect } from 'react-redux';
import './image.css';

class Image extends Component {

  state = {
    incorrect: 0,
    image: 'https://vignette.wikia.nocookie.net/poohadventures/images/a/a0/EiMArL4yT.png/revision/latest?cb=20150906014901'
  };

  componentWillReceiveProps(nextProps) {
    const { word } = this.props;
    const mostRecentGuess = nextProps.guesses[nextProps.guesses.length - 1];
    if(!word.includes(mostRecentGuess) && mostRecentGuess) this.setState({ incorrect: this.state.incorrect + 1 }); //if the random word includes the most recent guess, and there is a most recent guess
  }

  render() {
    const { word } = this.props;
    const { incorrect, image } = this.state;

    return (
      <figure className="image-box">
        <img src={image} alt='image of pokemon you are guessing'/>
        { (incorrect < 2) && <span id="incorrect-1"></span>}
        { (incorrect < 3) && <span id="incorrect-2"></span>}
        { (incorrect < 4) && <span id="incorrect-3"></span>}
        { (incorrect < 5) && <span id="incorrect-4"></span>}
        { (incorrect < 6) && <span id="incorrect-5"></span>}
        { (incorrect < 7) && <span id="incorrect-6"></span>}
      </figure>
    );
  }
}

export default connect(
  state => ({ guesses: state.guesses, word: state.word }),
  null
)(Image);