function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>

        <div className="sidebar-logo">
          <h2>TicketFlow</h2>
        </div>

        <p className="menu-heading">MENU</p>

        <nav className="sidebar-menu">
          <a href="#dashboard" className="menu-item active">
            <span>▦</span> Dashboard
          </a>

          <a href="#tickets" className="menu-item">
            <span>🎫</span> Tickets
          </a>

          <a href="#customers" className="menu-item">
            <span>👥</span> Customers
          </a>

          <a href="#reports" className="menu-item">
            <span>📊</span> Reports
          </a>

          <a href="#settings" className="menu-item">
            <span>⚙</span> Settings
          </a>
        </nav>

        <div className="sidebar-bottom">
          <p>Support Dashboard</p>
          <small>Version 1.0.0</small>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;