import React, { Component } from 'react'
import { Player, BigPlayButton, ControlBar } from 'video-react'
import videos from '../../static/json/videos.json'
import './videoDisplay.scss'

export default class VideoDisplay extends Component {
  render () {
    return (
      <div className="row centered relaxed cp-video-display">
        {videos.map((url, i) => (
          <div
            className="five wide column cp-video-display__player"
            key={i}>
            <Player src={url}>
              <BigPlayButton position="center" />
              <ControlBar autoHide={true} />
            </Player>
          </div>
        ))}
      </div>
    )
  }
}
