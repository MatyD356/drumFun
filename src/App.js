import React from "react";
import DrumPad from "./components/DrumPad";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      volume: 0.5,
      tracks: [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
      }, {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
      }, {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
      }, {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
      }, {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
      }, {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
      }, {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
      }, {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
      }, {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
      },
      ]
    };
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    document.body.appendChild(script);
  }
  chandlePoower() {
    this.setState({
      power: !this.state.power
    })
    let handle = document.getElementById('power-handle')
    if (handle.innerHTML === "OFF") {
      handle.innerHTML = "ON"
      handle.style.right = "50%"
    } else {
      handle.innerHTML = "OFF"
      handle.style.right = "0"
      document.getElementById('display').innerHTML = null
    }
  }
  chandleVolume() {
    let val = document.getElementById("volume").value / 100
    val < 0 ? val = 0 : val > 1 ? val = 1 : console.log()
    this.setState({
      volume: val
    })
    document.getElementById('display').innerHTML = this.state.volume * 100
  }
  render() {
    return (
      <div className="App" id="drum-machine">
        <div className='pad-container'>
          {this.state.tracks.map((item, index) => {
            return <DrumPad
              className="drum-pad"
              power={this.state.power}
              key={item.id}
              vol={this.state.volume}
              index={index}
              obj={item} />
          })}
        </div>
        <div className="config-container">
          <div className="power-container">
            <div className="config-title">Power</div>
            <div id="power" className="power" onClick={this.chandlePoower.bind(this)}><div id="power-handle" className="power-handle">OFF</div>
            </div>
          </div>
          <div id="display" className="display"> </div>
          <div className="volume-handle">
            <p className="volume-title">Volume</p>
            <input id="volume" className="slider" type="range" min="-10" max="110" step="10" onChange={
              this.chandleVolume.bind(this)
            } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
