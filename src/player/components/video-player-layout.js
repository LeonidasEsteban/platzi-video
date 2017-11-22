import React from 'react';
import './video-player-layout.css';

const VideoPlayerLayout = (props) => (
  <div
    className="VideoPlayer"
    ref={props.setRef}
  >
    {props.children}
  </div>
)

export default VideoPlayerLayout
