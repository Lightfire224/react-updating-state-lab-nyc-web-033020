// Code YouTubeDebugger Component Here
import React from 'react'

export default class YoutubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBit = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeRes = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        console.log(this.state.settings.bitrate)
        return (
            <div>
                <button className="bitrate" onClick={this.changeBit}>changebit to 12</button>
                <button className='resolution' onClick={this.changeRes}>change res prop to 720</button>
            </div>
        )
    }
}