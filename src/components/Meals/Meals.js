import { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import MealItemForm from './MealItem/MealItemForm';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;