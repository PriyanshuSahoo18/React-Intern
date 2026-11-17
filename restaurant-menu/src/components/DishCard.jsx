import React from "react";

function DishCard({ dish }) {
  return (
    <div className="dish-card">

      <div className="dish-info">

        <span className="food-icon">
          {dish.type === "veg" ? "🟢" : "🔴"}
        </span>

        <div>
          <h3>{dish.name}</h3>
          <p className="dish-price">₹{dish.price}</p>
        </div>

      </div>

      <div>
        {dish.available ? (
          <span className="available">Available</span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>

    </div>
  );
}

export default DishCard;