import React from 'react';
import KEYS from '../util/keys.js';

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.querySelectorAll('.key').forEach((el) => {
      el.addEventListener('transitionend', () => {
        el.classList.remove('playing');
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.updateSpanInnerHTML();
    }
  }

  updateSpanInnerHTML() {
    const sounds = Object.keys(this.props.sounds);
    
    if (sounds.length > 0) {
      const keys = KEYS;

      keys.forEach((key) => {
        document.querySelector(`.key[data-key="${key}"]`).children[1].innerHTML = this.props.sounds[`key${key}`].split('/')[3].split('.')[0];
      });
    }
  }

  handleKeyDown(e) {
    // for CSS
    const div = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!div) {
      return;
    }
    div.classList.add('playing');
    
    // for audio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    return (
      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound"></span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound"></span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound"></span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound"></span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound"></span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound"></span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound"></span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound"></span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound"></span>
        </div>
      </div>
    );
  }
}

export default Keys;