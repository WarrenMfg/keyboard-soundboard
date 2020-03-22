import React from 'react';
import '../style.css';

class SoundLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);
  }

  handleChangeLibrary(e) {
    const index = this.props.libraries.indexOf(e.target.innerHTML);

    if (index >= 0) {
      this.props.changeLibrary(this.props.libraries[index]);
    }
  }

  render() {
    return (
      <div className="buttons" onClick={this.handleChangeLibrary}>
        {this.props.libraries.map((library, i) => <button key={i}>{library || ''}</button>)}
      </div>
    );
  }
}

export default SoundLibrary;