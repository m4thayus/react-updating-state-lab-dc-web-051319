import React from "react";

class DigitalClicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let incTimes = this.state.timesClicked + 1
        this.setState({
            timesClicked: incTimes
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker