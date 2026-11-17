function KpiTile({ title, value, icon, color }) {

  return (
    <div className="kpi-tile">

      <div>
        <p className="kpi-title">{title}</p>
        <h2>{value}</h2>
      </div>

      <div
        className="kpi-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

    </div>
  );
}

export default KpiTile;