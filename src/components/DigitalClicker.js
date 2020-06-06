// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
    state = {
        timesClicked: 0
    }

    incrementClickCount = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render(){
        return (
        <button onClick={this.incrementClickCount}>{this.state.timesClicked}</button>
        )
    }
}