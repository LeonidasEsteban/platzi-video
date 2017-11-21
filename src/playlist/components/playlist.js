import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import FullScreen from '../../icons/components/full-screen';
import Volume from '../../icons/components/volume';

function Playlist(props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return (
    <div className="Playlist">
      <Play
        size={100}
        color="red"
      />
      <Volume
        size={50}
        color="blue"
      />
      <Pause
        size={70}
        color="orange"
      />
      <FullScreen
        size={200}
        color="green"
      />
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;
