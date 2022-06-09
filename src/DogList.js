import React from 'react';
import DogItem from './DogItem.js';
export default function DogList({ dogs }) {
  return (
    <div>
      {
        dogs.map((dog, i) => <DogItem {...dog} key={dog + i} />)

      }
    </div>
  );
}
