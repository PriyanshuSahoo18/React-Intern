import AppShell from "./components/AppShell";
import KpiTile from "./components/KpiTile";
import DataTable from "./components/DataTable";

import tickets from "./data/tickets.json";
import columns from "./data/columns";

import "./App.css";

function App() {

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  return (

    <AppShell>

      <div className="dashboard-header">

        <div>
          <h2>Overview</h2>
          <p>Welcome back! Here's what's happening with your tickets.</p>
        </div>

        <button className="export-btn">
          + New Ticket
        </button>

      </div>

      {/* KPI SECTION */}

      <div className="kpi-grid">

        <KpiTile
          title="Total Tickets"
          value={totalTickets}
          icon="🎫"
          color="#e0e7ff"
        />

        <KpiTile
          title="Open Tickets"
          value={openTickets}
          icon="📂"
          color="#fee2e2"
        />

        <KpiTile
          title="In Progress"
          value={inProgressTickets}
          icon="⏳"
          color="#fef3c7"
        />

        <KpiTile
          title="Resolved"
          value={resolvedTickets}
          icon="✅"
          color="#dcfce7"
        />

      </div>

      {/* TABLE SECTION */}

      <div className="table-section">

        <div className="table-header">

          <div>
            <h3>Recent Tickets</h3>
            <p>Manage and monitor customer support tickets.</p>
          </div>

          <span className="ticket-count">
            {totalTickets} Tickets
          </span>

        </div>

        <DataTable
          columns={columns}
          data={tickets}
        />

      </div>

    </AppShell>

  );
}

export default App;