import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      volume: 50,
      tracks: {
        keyTriger: 'q',
        id: "drum-plate",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
      }
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    document.body.appendChild(script);
  }
  handleClick() {
    let obj = document.getElementById(this.state.tracks.keyTriger)
    let display = document.getElementById('display')
    display.innerHTML = this.state.tracks.id
    obj.play()
  }
  handleKeyPress(e) {
    if (e.key === this.state.tracks.keyTriger) {
      let obj = document.getElementById(this.state.tracks.keyTriger)
      let display = document.getElementById('display')
      display.innerHTML = this.state.tracks.id
      obj.play()
    }
  }
  render() {
    return (
      <div className="App" id="drum-machine" onKeyPress={this.handleKeyPress} tabIndex="0">
        <div className='pad-container'>
          <button className="drum-pad" id={this.state.tracks.id} onClick={this.handleClick}>
            <audio className="clip" id={this.state.tracks.keyTriger} src={this.state.tracks.src} />
            Q</button>
          <button className="drum-pad" id="">W</button>
          <button className="drum-pad" id="">E</button>
          <button className="drum-pad" id="">A</button>
          <button className="drum-pad" id="">S</button>
          <button className="drum-pad" id="">D</button>
          <button className="drum-pad" id="">Z</button>
          <button className="drum-pad" id="">X</button>
          <button className="drum-pad" id="">C</button>
        </div>
        <div className="config-container">
          <div className="power-container">
            <div className="config-title">Power</div>
            <div id="power" className="power"></div>
          </div>
          <div id="display" className="display"></div>
          <input type="range" id="volume" name="volume" min="0" max="100" className="slider"></input>
        </div>
      </div>
    );
  }
}

export default App;
