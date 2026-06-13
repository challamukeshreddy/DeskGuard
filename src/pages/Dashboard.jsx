import { seats } from "../data/seats";

export default function Dashboard() {
  const free = seats.filter((s) => s.status === "free").length;

  const occupied = seats.filter((s) => s.status === "occupied").length;

  const away = seats.filter((s) => s.status === "away").length;

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h2>{seats.length}</h2>
          <p>Total Seats</p>
        </div>

        <div className="stat-card">
          <h2>{free}</h2>
          <p>Available</p>
        </div>

        <div className="stat-card">
          <h2>{occupied}</h2>
          <p>Occupied</p>
        </div>

        <div className="stat-card">
          <h2>{away}</h2>
          <p>Away</p>
        </div>
      </div>

      <div className="ai-card">
        <h2>🤖 AI Occupancy Insights</h2>

        <p>Peak Crowd Time: 4 PM - 6 PM</p>

        <p>Expected Occupancy: 87%</p>

        <p>Recommended Study Time: 8 AM - 11 AM</p>
      </div>
    </div>
  );
}
