import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2 className={classes.h2}>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at a home.
      </p>
      <p>
        All our meals, are cooked with high-quality ingredients, Just-in-time
        and ofcourse by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
