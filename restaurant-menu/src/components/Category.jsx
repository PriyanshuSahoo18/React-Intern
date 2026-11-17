import React from "react";
import DishCard from "./DishCard";

function Category({ category, sortOrder }) {

  const sortedDishes = [...category.dishes].sort((a, b) => {

    if (sortOrder === "low") {
      return a.price - b.price;
    }

    if (sortOrder === "high") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <div className="category">

      <h2 className="category-title">
        {category.name}
      </h2>

      <div className="dish-list">

        {sortedDishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
          />
        ))}

      </div>

    </div>
  );
}

export default Category;