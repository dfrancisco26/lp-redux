import React from 'react';

export default function SqwadItem({ name, leader, members }) {
  return (
    <div><p>{name} {leader}</p> <ul><li>{members[0]}</li><li>{members[1]}</li><li>{members[2]}</li></ul> </div>
  );
}

