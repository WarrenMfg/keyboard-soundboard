import React from 'react';
import '../style.css';

class SoundLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);
    this.changeActiveButton = this.changeActiveButton.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.libraries !== this.props.libraries) {
      document.querySelectorAll('button').forEach((b) => {
        if (b.innerText === 'drums') {
          b.classList.add('active');
        }
      });
    }
  }

  handleChangeLibrary(e) {
    const index = this.props.libraries.indexOf(e.target.innerHTML);

    if (index >= 0) {
      this.props.changeLibrary(this.props.libraries[index]);
      this.changeActiveButton(e.target);
    }
  }

  changeActiveButton(button) {
    document.querySelector('.active').classList.remove('active');
    button.classList.add('active');
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