import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import css from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {
   const [meals, setMeals] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState();

   useEffect(() => {
      const getMeals = async() => {
         const response =
            await fetch('https://meals-data-d7428-default-rtdb.firebaseio.com/meals.json');
         
         if (!response.ok)
            throw new Error("Something went wrong!");

         const data = await response.json();

         const dbMeals = [];

         for (const key in data)
            dbMeals.push({
               id: key,
               name: data[key].name,
               description: data[key].description,
               price: data[key].price
            });

         setMeals(dbMeals);
         setLoading(false);
      }

      getMeals().catch(error => {
         setLoading(false);
         setError(error.message);
      });
   }, [])

   if (loading)
      return (
         <section className={ css.loading }>
            <p>Loading...</p>
         </section>
      );

   if (error)
      return (
         <section className={ css.error }>
            <p>{ error }</p>
         </section>
      );

   return (
      <section className={ css.meals }>
         <Card>
            <ul>
               { meals.map(meal => <MealItem id={ meal.id } key={ meal.id } meal={ meal } />) }
            </ul>
         </Card>
      </section>
   );
};

export default AvailableMeals;