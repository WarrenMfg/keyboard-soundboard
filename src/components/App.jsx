import React from 'react';
import Keys from './Keys.jsx';
import Audio from './Audio.jsx';
import SoundLibrary from './SoundLibrary.jsx';
import KEYS from '../util/keys.js';
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      libraries: [],
      library: 'drums', // default
      sounds: {
        key65: '',
        key83: '',
        key68: '',
        key70: '',
        key71: '',
        key72: '',
        key74: '',
        key75: '',
        key76: ''
      }
    }

    this.changeLibrary = this.changeLibrary.bind(this);
  }

  componentDidMount() {
    fetch('/default')
      .then((data) => data.json())
      .then((data) => {
        let { libraries, soundFiles } = data;
        libraries.sort();
        soundFiles.sort();
        soundFiles = soundFiles.map((soundFile) => `/libraries/${this.state.library}/${soundFile}`);

        const keys = KEYS;
        const sounds = {};
        keys.forEach((key, i) => {
          sounds[`key${key}`] = soundFiles[i];
        });
        this.setState({ libraries, sounds });
      })
      .catch((err) => console.log('error at App.jsx componentDidMount', err));
  }

  changeLibrary(library) {
    fetch(`/library/${library}`)
      .then((data) => data.json())
      .then((data) => {
        let { soundFiles } = data;
        const keys = KEYS;
        soundFiles.sort();
        soundFiles = soundFiles.map((soundFile) => `/libraries/${library}/${soundFile}`);

        const sounds = {};
        keys.forEach((key, i) => {
          sounds[`key${key}`] = soundFiles[i];
        });
        this.setState({ library, sounds });
      })
      .catch((err) => console.log('error App.jsx changeLibrary', err));
  }

  render() {
    return (
      <div>
        <Keys sounds={this.state.sounds} />
        <Audio sounds={this.state.sounds} />
        <SoundLibrary libraries={this.state.libraries} sounds={this.state.sounds} changeLibrary={this.changeLibrary} />
      </div>
    );
  }
}

export default App;