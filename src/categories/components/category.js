import React from 'react';
import Playlist from '../../playlist/components/playlist.js';
import './category.css';

function Category(props) {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist
        handleOpenModal={props.handleOpenModal}
        playlist={props.playlist}
      />
    </div>
  )
}

export default Category;
