import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <button
        onClick={props.handleClick}
        className="Modal-close"
      />
    </div>
  )
}

export default Modal;
