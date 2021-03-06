import React from 'react';
import SqwadItem from './SqwadItem';
export default function SqwadList({ sqwads }) {
  return (
    <div>
      {
        sqwads.map((sqwad, i) => <SqwadItem {...sqwad} key={i + sqwad} />)
      }    
    </div>
  );
}

