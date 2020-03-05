import React from "react";

class DrumPad extends React.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }
    handleClick() {
        if (this.props.power === true) {
            let getObj = document.getElementById(this.props.obj.keyTrigger);
            let display = document.getElementById('display');
            display.innerHTML = this.props.obj.id;
            getObj.volume = this.props.vol
            getObj.play();
        }
    }
    handleKeyPress(e) {
        if (this.props.power === true) {
            if (e.keyCode === this.props.obj.keyCode) {
                let getObj = document.getElementById(this.props.obj.keyTrigger);
                let display = document.getElementById('display');
                display.innerHTML = this.props.obj.id;
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
            {this.props.obj.keyTrigger}
        </button>
    }
}
export default DrumPad