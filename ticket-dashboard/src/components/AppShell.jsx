import { useState } from "react";
import Sidebar from "./Sidebar";

function AppShell({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-shell">

      <Sidebar
        isOpen={isOpen}
        closeSidebar={() => setIsOpen(false)}
      />

      <main className="main-content">

        <header className="topbar">

          <div className="topbar-left">

            <button
              className="menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

            <h3>Dashboard</h3>

          </div>

          <div className="topbar-right">

            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />

            <button className="notification-btn">
              🔔
            </button>

            <div className="profile">
              <div className="profile-avatar">P</div>

              <div>
                <strong>Priyanshu</strong>
                <small>Administrator</small>
              </div>
            </div>

          </div>

        </header>

        <section className="page-content">
          {children}
        </section>

      </main>

    </div>
  );
}

export default AppShell;