import React from 'react';
import FoodItem from './FoodItem';

export default function FoodsList({ foods }) {
  return (
    <><div>
      {
        foods.map((food, i) => <FoodItem food={food} key={food + i} />)
      }
    </div>
    </>
  );
}
