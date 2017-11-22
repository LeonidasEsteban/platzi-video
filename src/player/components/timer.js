import React from 'react';
import './timer.css';

function leftPad(number) {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

function formattedTime(secs) {
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);
  return `${minutes} : ${leftPad(seconds.toString())}`
}

function Timer(props) {
  return (
    <div className="Timer">
      <p>
        <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
      </p>
    </div>
  )
}

export default Timer;
