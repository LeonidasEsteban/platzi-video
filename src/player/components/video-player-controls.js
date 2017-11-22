import React from 'react';
import './video-player.controls.css';

function VideoPlayerControls(props) {
  return (
    <div class="VideoPlayerControls">
      {props.children}
    </div>
  )
}

export default VideoPlayerControls
