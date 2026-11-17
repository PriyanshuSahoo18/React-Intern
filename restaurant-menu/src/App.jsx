import React, { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {

  const [sortOrder, setSortOrder] = useState("default");

  return (
    <div className="app">

      <header className="header">
        <h1>Foodie's Restaurant</h1>
        <p>Delicious Food, Fresh Taste!</p>
      </header>

      <main className="main-container">

        <div className="menu-heading">

          <h2>Our Menu</h2>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default Order</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>

        </div>

        <Menu sortOrder={sortOrder} />

      </main>

      <footer className="footer">
        <p>© 2026 Foodie's Restaurant</p>
      </footer>

    </div>
  );
}

export default App;