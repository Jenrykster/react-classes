import React from 'react';
import AvaiableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvaiableMeals />
    </React.Fragment>
  );
};

export default Meals;
