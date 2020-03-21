import React from 'react';
import '../style.css';

class SoundLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);
  }

  handleChangeLibrary(e) {
    const libraries = ['drums', 'animals'];
    const index = libraries.indexOf(e.target.innerHTML);

    if (index >= 0) {
      switch (libraries[index]) {
        case 'drums':
          this.props.changeLibrary('drums', {
            key65: 'sounds/drums/clap.wav',
            key83: 'sounds/drums/hihat.wav',
            key68: 'sounds/drums/kick.wav',
            key70: 'sounds/drums/openhat.wav',
            key71: 'sounds/drums/boom.wav',
            key72: 'sounds/drums/ride.wav',
            key74: 'sounds/drums/snare.wav',
            key75: 'sounds/drums/tom.wav',
            key76: 'sounds/drums/tink.wav'
          });
          break;
        case 'animals':
          this.props.changeLibrary('animals', {
            key65: 'sounds/drums/clap.wav',
            key83: 'sounds/drums/hihat.wav',
            key68: 'sounds/drums/kick.wav',
            key70: 'sounds/drums/openhat.wav',
            key71: 'sounds/drums/boom.wav',
            key72: 'sounds/drums/ride.wav',
            key74: 'sounds/drums/snare.wav',
            key75: 'sounds/drums/tom.wav',
            key76: 'sounds/drums/tink.wav'
          });
          break;
      }
    }
    // if (e.)
  }

  render() {
    return (
      <div className="buttons" onClick={this.handleChangeLibrary}>
        <button>drums</button>
        <button>animals</button>
      </div>
    );
  }
}

export default SoundLibrary;