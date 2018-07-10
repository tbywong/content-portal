import React, { Component } from 'react'
import { Player, BigPlayButton, ControlBar } from 'video-react'
import videos from '../../static/json/videoFileNames.json'
import { S3_URL } from '../../config/constants'
import './videoDisplay.scss'

const VideoDisplay = () => (
  <div className="row centered relaxed cp-video-display">
    {videos.map((fileName, i) => (
      <div
        className="five wide column cp-video-display__player"
        key={i}>
        <Player src={`${S3_URL}/${fileName}`}>
          <BigPlayButton position="center" />
          <ControlBar autoHide={true} />
        </Player>
      </div>
    ))}
  </div>
)

export default VideoDisplay
