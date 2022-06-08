import React from 'react';
import AlbumItem from './AlbumItem';

export default function AlbumList({ albums }) {
  return (
    <div>
      {
        albums.map((album, i) => <AlbumItem {...album} key={i + album} />)
      }
    </div>
    
  );
}

