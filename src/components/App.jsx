import React from 'react';
import Keys from './Keys.jsx';
import Audio from './Audio.jsx';
import SoundLibrary from './SoundLibrary.jsx';
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundLibrary: 'drums',
      sounds: {
        key65: 'sounds/drums/clap.wav',
        key83: 'sounds/drums/hihat.wav',
        key68: 'sounds/drums/kick.wav',
        key70: 'sounds/drums/openhat.wav',
        key71: 'sounds/drums/boom.wav',
        key72: 'sounds/drums/ride.wav',
        key74: 'sounds/drums/snare.wav',
        key75: 'sounds/drums/tom.wav',
        key76: 'sounds/drums/tink.wav'
      }
    }

    this.changeLibrary = this.changeLibrary.bind(this);
  }

  changeLibrary(soundLibrary, sounds) {
    this.setState({ soundLibrary, sounds });
  }

  render() {
    return (
      <div>
        <Keys sounds={this.state.sounds} />
        <Audio sounds={this.state.sounds} />
        <SoundLibrary changeLibrary={this.changeLibrary} />
      </div>
    );
  }
}

export default App;