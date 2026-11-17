import React from "react";
import menuData from "../data/menu.json";
import Category from "./Category";

function Menu({ sortOrder }) {

  return (
    <div className="menu-container">

      {menuData.map((category) => (
        <Category
          key={category.id}
          category={category}
          sortOrder={sortOrder}
        />
      ))}

    </div>
  );
}

export default Menu;