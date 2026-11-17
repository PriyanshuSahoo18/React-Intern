function DataTable({ columns, data }) {

  return (
    <div className="table-container">

      <table>

        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          {data.map((ticket) => (

            <tr key={ticket.id}>

              {columns.map((column) => (

                <td key={column.key}>

                  {column.key === "status" ? (
                    <span
                      className={`status-badge ${ticket.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {ticket.status}
                    </span>
                  ) : column.key === "priority" ? (
                    <span
                      className={`priority ${ticket.priority.toLowerCase()}`}
                    >
                      {ticket.priority}
                    </span>
                  ) : (
                    ticket[column.key]
                  )}

                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

      {data.length === 0 && (
        <p className="empty-message">No tickets found.</p>
      )}

    </div>
  );
}

export default DataTable;