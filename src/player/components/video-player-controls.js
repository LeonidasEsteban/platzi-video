import React from 'react';
import './video-player.controls.css';

function VideoPlayerControls(props) {
  return (
    <div className="VideoPlayerControls">
      {props.children}
    </div>
  )
}

export default VideoPlayerControls
