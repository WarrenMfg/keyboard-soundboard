import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { key65, key83, key68, key70, key71, key72, key74, key75, key76 } = this.props.sounds;
    return (
      <div>
        <audio data-key="65" src={key65}></audio>
        <audio data-key="83" src={key83}></audio>
        <audio data-key="68" src={key68}></audio>
        <audio data-key="70" src={key70}></audio>
        <audio data-key="71" src={key71}></audio>
        <audio data-key="72" src={key72}></audio>
        <audio data-key="74" src={key74}></audio>
        <audio data-key="75" src={key75}></audio>
        <audio data-key="76" src={key76}></audio>
      </div>
    );
  }
}

export default Audio;