import React from 'react';

export default function DogItem({ name, breed, coat }) {
  return (
    <div>
      <p>{name} is a {breed} with a {coat.condition}, {coat.density} {coat.double} coat.</p>
    </div>
  );
}
