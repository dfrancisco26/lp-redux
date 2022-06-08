import React from 'react';
export default function AlbumItem({ 
  name,
  artist,
  genre,
  year 
}) {
  return (
    <div>
      <p>{name} {artist} {genre} {year}</p>
    </div>
  );
}