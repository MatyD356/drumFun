import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            volume: this.props.vol
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }
    shouldComponentUpdate(vol) {
        return this.props.vol !== vol
    }
    handleClick() {
        if (this.props.power === true) {
            let getObj = document.getElementById(this.props.obj.keyTrigger);
            let display = document.getElementById('display');
            display.innerHTML = this.props.obj.id;
            getObj.play();
        }
    }
    handleKeyPress(e) {
        if (this.props.power === true) {
            if (e.keyCode === this.props.obj.keyCode) {
                let getObj = document.getElementById(this.props.obj.keyTrigger);
                let display = document.getElementById('display');
                display.innerHTML = this.props.obj.id;
                console.log(this.state.volume)
                getObj.play();
            }
        }
    }
    render() {
        return <button
            className={this.props.className}
            onClick={this.handleClick.bind(this)}
            id={this.props.obj.id}>
            <audio className="clip" id={this.props.obj.keyTrigger} src={this.props.obj.url} />
            {this.shouldComponentUpdate(this.props.value)}
            {this.props.obj.keyTrigger}
        </button>
    }
}
export default DrumPad